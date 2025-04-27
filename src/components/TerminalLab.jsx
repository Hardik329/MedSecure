// components/TerminalLab.tsx

import React, { useState } from "react";

const TerminalLab = () => {
  const [commands, setCommands] = useState([]);
  const [currentInput, setCurrentInput] = useState("");

  const handleInput = (e) => {
    setCurrentInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentInput.trim() === "") return;

    const newCommands = [...commands, { command: currentInput, result: getResult(currentInput) }];
    setCommands(newCommands);
    setCurrentInput("");
  };

  const getResult = (input) => {
    const cmd = input.trim().toLowerCase();

    if (cmd === "help") {
      return "Available commands: help, ping, traceroute, ssh, whoami, clear";
    } else if (cmd === "ping") {
      return "Pinging 8.8.8.8... Success! (simulated)";
    } else if (cmd === "traceroute") {
      return "Tracing route to hospital server... Hop 1 -> Hop 2 -> Success.";
    } else if (cmd === "ssh") {
      return "SSH attempt failed: Unauthorized access detected!";
    } else if (cmd === "whoami") {
      return "You are: security_auditor@hospital-network";
    } else if (cmd === "clear") {
      setCommands([]);
      return "";
    } else {
      return `Unknown command: '${cmd}' (type 'help')`;
    }
  };

  return (
    <div className="bg-black text-green-400 font-mono p-6 rounded-xl shadow-xl min-h-[400px]">
      <div className="overflow-y-auto mb-4 max-h-72">
        {commands.map((item, index) => (
          <div key={index} className="mb-2">
            <div>&gt; {item.command}</div>
            <div className="pl-4">{item.result}</div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center">
        <span className="mr-2">&gt;</span>
        <input
          type="text"
          value={currentInput}
          onChange={handleInput}
          className="bg-black border-b-2 border-green-400 outline-none w-full text-green-400 placeholder-green-600"
          placeholder="Type a command (try 'help')"
        />
      </form>
    </div>
  );
};

export default TerminalLab;
