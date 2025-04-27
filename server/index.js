const express = require("express");
const WebSocket = require("ws");
const cors = require("cors");

const { parse } = require("url");
const { cleanupContainers, createNetworkIfNotExists, createKaliContainer, streamToTerminal, createVulnContainer, ensureImageExists } = require("./docker-utils");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const wss = new WebSocket.Server({ port: 8080 });

// const networkName = "pentest-net";
let pentestNetwork;

const attacker = "my-kali-custom";
// const attacker = "kalilinux/kali-rolling";

const defender = "appsecco/dsvw";

wss.on("connection", async (ws, req) => {
  pentestNetwork = await createNetworkIfNotExists();
  const path = parse(req.url).pathname;
  await ensureImageExists(defender);
  await ensureImageExists(attacker);


  if (path === "/kali") {
    const kaliContainer = await createKaliContainer(attacker);
    await streamToTerminal(kaliContainer, "/bin/bash", ws);
  } else if (path === "/vuln") {
    const vulnContainer = await createVulnContainer(attacker);
    await streamToTerminal(vulnContainer, "/bin/bash", ws);
  } else {
    ws.close(1000, "Invalid path");
    return;
  }
  
});


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
