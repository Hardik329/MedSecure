const networkName = "pentest-net";
const Docker = require("dockerode");
const docker = new Docker();
let activeContainers = [];

async function createNetworkIfNotExists() {
  try {
    const networks = await docker.listNetworks();
    const exists = networks.find((n) => n.Name === networkName);
    let pentestNetwork;
    if (!exists) {
      pentestNetwork = await docker.createNetwork({ Name: networkName });
      console.log("Created network:", networkName);
    } else {
      pentestNetwork = docker.getNetwork(networkName);
      console.log("Using existing network:", networkName);
    }
    return pentestNetwork;
  } catch (err) {
    console.error("Error creating network:", err);
  }
}

async function streamToTerminal(container, shell, ws) {
  const exec = await container.exec({
    Cmd: [shell],
    AttachStdin: true,
    AttachStdout: true,
    AttachStderr: true,
    Tty: true,
  });

  const stream = await exec.start({ hijack: true, stdin: true });

  stream.on("data", (data) => ws.send(data.toString()));
  ws.on("message", (data) => stream.write(data));

  ws.on("close", async () => {
    console.log("Socket closing...");
    try {
      await stream.end();
      await container.stop();
      await container.remove();
      activeContainers = activeContainers.filter((c) => c.id !== container.id);
    } catch (error) {
      console.error("Error closing socket:", error);
      ws.close();
    }
    console.log("Socket closed");
  });
}

async function ensureImageExists(imageName) {
  try {
    await docker.getImage(imageName).inspect();
    console.log(`Image ${imageName} already exists.`);
  } catch (err) {
    console.log(`Image ${imageName} not found. Pulling...`);
    await new Promise((resolve, reject) => {
      docker.pull(imageName, (err, stream) => {
        if (err) return reject(err);
        docker.modem.followProgress(stream, onFinished, onProgress);

        function onFinished(err, output) {
          if (err) return reject(err);
          resolve(output);
        }

        function onProgress(event) {
          if (event.status) {
            const msg = `${event.status} ${event.progress || ""}`.trim();
            console.log(msg);
          }
        }
      });
    });
    console.log(`Image ${imageName} pulled successfully.`);
  }
}

async function createKaliContainer(attacker) {
  const container = await docker.createContainer({
    Image: attacker,
    // name: "attacker-kali",
    Tty: true,
    Cmd: ["/bin/bash"],
    HostConfig: {
      AutoRemove: true,
      NetworkMode: networkName,
      Binds: ["C:/CyberDocker:/resources:ro"],
      Privileged: true,
    },
  });

  await container.start();
  activeContainers.push(container);
  return container;
}

async function createVulnContainer(defender) {
  const container = await docker.createContainer({
    Image: defender,
    // name: "target-defender",
    Tty: true,
    HostConfig: {
      AutoRemove: true,
      NetworkMode: networkName,
      Privileged: true,
      PortBindings: {
        "22/tcp": [
          {
            HostPort: "", // Docker will assign random host port, or set manually (like 2222)
          },
        ],
      },
    },
    ExposedPorts: {
      "22/tcp": {},
    },
  });

  // const victim = await docker.createContainer({
  //   Image: defender,
  //   name: 'victim',
  //   Cmd: ['/bin/bash', '-c', `
  //     apt-get update && apt-get install -y openssh-server sudo && \
  //     mkdir /var/run/sshd && \
  //     useradd -m -s /bin/bash hacker && echo 'hacker:password123' | chpasswd && \
  //     sed -i 's/#PasswordAuthentication yes/PasswordAuthentication yes/' /etc/ssh/sshd_config && \
  //     sed -i 's/PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config && \
  //     service ssh start && \
  //     echo "🎯 Root flag: Success!" > /root/flag.txt && \
  //     tail -f /dev/null
  //   `],
  //   Tty: true,
  //   HostConfig: {
  //     AutoRemove: true,
  //     NetworkMode: networkName
  //   }
  // });

  await container.start();
  activeContainers.push(container);
  return container;
}

const cleanupContainers = async () => {
  console.log("Cleaning up active containers...");
  for (const container of activeContainers) {
    try {
      await container.stop();
      await container.remove();
      console.log(`Container ${container.id} stopped and removed`);
    } catch (error) {
      console.error(
        `Error stopping/removing container ${container.id}:`,
        error
      );
    }
  }
  activeContainers = [];
};

module.exports = {
  createNetworkIfNotExists,
  streamToTerminal,
  ensureImageExists,
  createKaliContainer,
  createVulnContainer,
  cleanupContainers,
};
