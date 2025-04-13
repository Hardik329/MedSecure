const express = require("express");
const WebSocket = require("ws");
const cors = require("cors");
const Docker = require("dockerode");
const docker = new Docker();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let activeContainers = [];

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", async (ws) => {
  const container = await docker.createContainer({
    Image: "kalilinux/kali-rolling",
    Tty: true,
    Cmd: ["/bin/bash"],
    HostConfig: {
      AutoRemove: true,
      Binds: [
        "C:/CyberDocker:/mnt/resources:ro" 
      ]
    },
    
    
  });

  await container.start();
  activeContainers.push(container);

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
      activeContainers = activeContainers.filter((c) => c.id !== container.id);
    } catch (error) {
      console.error("Error closing socket:", error);
      ws.close();
    }
    console.log("Socket closed");
  });
});

const cleanupContainers = async () => {
  console.log("Cleaning up active containers...");
  for (const container of activeContainers) {
    try {
      await container.stop();
      await container.remove();
      console.log(`Container ${container.id} stopped and removed`);
    } catch (error) {
      console.error(`Error stopping/removing container ${container.id}:`, error);
    }
  }
  activeContainers = [];
};

const handleExit = async (signal) => {
  console.log(`Received ${signal}. Shutting down server...`);
  await cleanupContainers();
  process.exit(0);
};

process.on("SIGINT", handleExit); 
process.on("SIGTERM", handleExit); 


app.listen(3000, () => {
  console.log("WebSocket terminal server listening on port 8080");
});
