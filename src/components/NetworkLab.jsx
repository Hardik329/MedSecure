import { useState } from "react";
import TerminalComponent from "./Terminal";

const NetworkLab = () => {
  const [terminalActive, setTerminalActive] = useState(false);

  const handleStart = () => setTerminalActive(true);
  const handleStop = () => setTerminalActive(false);
  return (
    <div className="bg-gray-100 rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">🛡️ Network Security Basics Lab</h2>

      {/* Mission Objective */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-700">🎯 Mission Objective</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Find your container's IP address.</li>
          <li>Check internet connectivity.</li>
          <li>Discover open ports and running services.</li>
          <li>Perform a basic network scan on localhost.</li>
          <li>Understand public IP exposure.</li>
        </ul>
      </div>

      {/* Installation Commands */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-700">🛠️ Installation Commands (Run First)</h3>
        <div className="bg-black text-green-400 p-4 rounded-md text-sm overflow-x-auto">
          apt-get update && apt-get install -y iputils-ping net-tools traceroute curl nmap
        </div>
        <p className="text-gray-500 text-sm mt-2">💬 Installs basic network tools for this lab.</p>
      </div>

      {/* Commands to Try */}
      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-700">📜 Commands to Try</h3>
        <ul className="space-y-3">
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔️</span>
            <code className="bg-gray-200 px-2 py-1 rounded">whoami</code> - Show current user
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔️</span>
            <code className="bg-gray-200 px-2 py-1 rounded">ip a</code> - List network interfaces
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔️</span>
            <code className="bg-gray-200 px-2 py-1 rounded">ping 8.8.8.8</code> - Check network connectivity
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔️</span>
            <code className="bg-gray-200 px-2 py-1 rounded">netstat -tulnp</code> - List open ports
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔️</span>
            <code className="bg-gray-200 px-2 py-1 rounded">nmap localhost</code> - Scan localhost ports
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔️</span>
            <code className="bg-gray-200 px-2 py-1 rounded">curl ifconfig.me</code> - Find public IP
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔️</span>
            <code className="bg-gray-200 px-2 py-1 rounded">cat /etc/hosts</code> - View host mappings
          </li>
        </ul>
      </div>

      {/* Terminal Component */}
      <div className="flex space-x-4 mb-4 pt-4">
        {!terminalActive && (<button
          onClick={handleStart}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          disabled={terminalActive}
        >
          Start Terminal
        </button>)}

        {terminalActive && (<button
          onClick={handleStop}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
          disabled={!terminalActive}
        >
          Stop Terminal
        </button>)}
      </div>
      {terminalActive && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-700">🖥️ Terminal</h3>
          <p className="text-gray-500 text-sm mb-2">💬 Use the terminal below to practice the commands!</p>
          <TerminalComponent />
        </div>
      )}
    </div>
  );
};

export default NetworkLab;
