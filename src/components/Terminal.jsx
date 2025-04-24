// Terminal.js
import { useEffect, useRef } from "react";
import { Terminal } from "xterm";
import "xterm/css/xterm.css";

import { React, useState } from "react";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import TabPanel from "@mui/lab/TabPanel";
// import TabList from '@mui/lab/TabList';
// import TabContext from "@mui/lab/TabContext";

// const TerminalContainer = () => {
//   const [value, setValue] = useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   return (
//     <>
//       <TabContext value={value}>
//         <TabList
//           // value={value}
//           onChange={handleChange}
//           aria-label="basic tabs example"
//         >
//           <Tab label="Item One" />
//           <Tab label="Item Two" />
//         </TabList>
//           <TerminalComponent />
//         <TabPanel value="1">
//         </TabPanel>
//         <TabPanel value="2">
//           {/* <TerminalComponent /> */}
//         </TabPanel>
//       </TabContext>
//     </>
//   );
// };

const TerminalComponent = ({ kali }) => {
  const terminalRef = useRef(null);
  const term = useRef(null);
  const socket = useRef(null);
  const commandBuffer = useRef("");
  const maxRetries = 5;
  const retryInterval = 2000;
  let retryCount = 0;

  let firstTry;

  const connectWebSocket = () => {
    console.log(socket.current);
    try {
      socket.current = new WebSocket(
        `ws://localhost:8080/${kali ? "kali" : "vuln"}`
      );

      socket.current.onopen = () => {
        console.log("WebSocket connection opened");
        term.current.write("\x1b[1;32mConnection established.\x1b[0m\r\n");
        retryCount = 0;
      };

      socket.current.onmessage = (event) => {
        term.current.write(event.data);
      };

      socket.current.onclose = () => {
        console.log("WebSocket connection closed");
        if (firstTry) {
          firstTry = false;
          return;
        }
        if (retryCount < maxRetries) {
          retryCount++;
          term.current.write(
            `\x1b[1;33mConnection lost. Retrying (${retryCount}/${maxRetries})...\x1b[0m\r\n`
          );
          setTimeout(connectWebSocket, retryInterval);
        } else {
          term.current.write(
            "\x1b[1;31mFailed to reconnect after multiple attempts. Please check the server.\x1b[0m\r\n"
          );
          term.current.write(
            "\x1b[1;31mAn error occurred with the WebSocket connection.\x1b[0m\r\n"
          );
        }
      };
    } catch (error) {
      console.log("WebSocket error:", error);
      term.current.write(
        "\x1b[1;31mAn unexpected error occurred. Please try again later.\x1b[0m\r\n"
      );
    }
  };

  useEffect(() => {
    term.current = new Terminal({ cursorBlink: true });
    term.current.open(terminalRef.current);

    term.current.write(
      "\x1b[1;3;31mWelcome to the MedSecure Terminal!\x1b[0m\r\n"
    );
    term.current.write("Please wait while the container loads...\r\n");
    firstTry = true;
    console.log("Creating container");
    connectWebSocket();

    term.current.onKey(({ key, domEvent }) => {
      const printable =
        !domEvent.altKey && !domEvent.ctrlKey && !domEvent.metaKey;
      if (domEvent.ctrlKey && domEvent.key === "c") {
        socket.current?.send("\x03"); // Ctrl+C
        commandBuffer.current = "";
      } else if (domEvent.key === "Enter") {
        socket.current?.send("\n");
        commandBuffer.current = "";
      } else if (domEvent.key === "Backspace") {
        if (commandBuffer.current.length > 0) {
          commandBuffer.current = commandBuffer.current.slice(0, -1);
          socket.current?.send("\b");
        }
      } else if (printable) {
        commandBuffer.current += key;
        socket.current?.send(key);
      }
    });

    return () => {
      socket.current?.close();
      term.current.dispose();
    };
  }, []);

  return (
    <div
      ref={terminalRef}
      style={{
        width: "100%",
        height: "500px",
        backgroundColor: "#000",
        padding: "10px",
        borderRadius: "5px",
        overflow: "hidden",
      }}
    />
  );
};

export default TerminalComponent;
