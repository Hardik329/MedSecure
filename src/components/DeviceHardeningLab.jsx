import React, { useState } from "react";
import TerminalComponent from "../components/Terminal"; // Reuse the Terminal Component
import InstructionCard from "../components/InstructionCard"; // Instruction Card for guiding the user

const DeviceHardeningLab = () => {
  const [startLab, setStartLab] = useState(false);

  const handleStart = () => {
    setStartLab(true);
  };

  const handleStop = () => {
    setStartLab(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">🔒 Device Hardening Lab</h2>
      
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h3 className="text-2xl font-semibold text-gray-700">📝 Lab Instructions</h3>
        <p className="text-gray-600 mb-4">
          In this lab, you will simulate the hardening of an IoT device by following these steps:
        </p>
        <InstructionCard
          step="1"
          instruction="Change the default password to a strong, secure password."
          command="sudo passwd root"
        />
        <InstructionCard
          step="2"
          instruction="Disable unused ports and services on the device to reduce attack surface."
          command="sudo systemctl disable telnet"
        />
        <InstructionCard
          step="3"
          instruction="Enable the firewall to block unauthorized access."
          command="sudo ufw enable"
        />
        <InstructionCard
          step="4"
          instruction="Ensure data is encrypted in transit by enabling SSL/TLS."
          command="sudo openssl req -x509 -newkey rsa:4096 -keyout device.key -out device.cert"
        />
      </div>

      <div className="flex space-x-4 mb-6 pt-4">
        {!startLab && (<button
          onClick={handleStart}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          disabled={startLab}
        >
          Start Lab
        </button>)}

        {startLab && (<button
          onClick={handleStop}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
          disabled={!startLab}
        >
          Stop Lab
        </button>)}
      </div>

      {startLab && (
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">🖥️ IoT Device Terminal</h3>
          <p className="text-gray-600 mb-4">Follow the instructions to secure your device.</p>
          <TerminalComponent />
        </div>
      )}
    </div>
  );
};

export default DeviceHardeningLab;
