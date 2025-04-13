const express = require("express");
const WebSocket = require("ws");
const cors = require("cors");
const Docker = require("dockerode");
const docker = new Docker();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", async (ws) => {
  const container = await docker.createContainer({
    Image: "kalilinux/kali-rolling",
    Tty: true,
    Cmd: ["/bin/bash"],
    HostConfig: {
      AutoRemove: true,
      Binds: [
        "C:/CyberDocker:/mnt/resources:ro" // 🔒 Read-only volume mount
      ]
    },
  });

  await container.start();

  const exec = await container.exec({
    Cmd: ["/bin/bash"],
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
    } catch (error) {
      console.error("Error closing socket:", error);
    }
    console.log("Socket closed");
  });
});

app.listen(3000, () => {
  console.log("WebSocket terminal server listening on port 8080");
});
