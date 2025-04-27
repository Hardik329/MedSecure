import React, { useState } from "react";
import TerminalComponent from "./Terminal";

const AccessControlLab = () => {
  const [startLab, setStartLab] = useState(false);

  const handleStart = () => {
    setStartLab(true);
  };

  const handleStop = () => {
    setStartLab(false);
  };
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        🔒 Access Control Hands-On Lab
      </h2>
      <p className="text-gray-700 mb-6">
        Practice access control basics in a simulated terminal below. Follow the steps and run the given commands!
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="font-semibold text-gray-800 mb-2">1. Create a New User</h3>
          <p className="text-gray-700">Add a new user (for example, "nurse1"):</p>
          <pre className="bg-black text-green-400 p-2 rounded mt-2">
            adduser nurse1
          </pre>
        </div>

        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="font-semibold text-gray-800 mb-2">2. Assign User to a Role (Group)</h3>
          <p className="text-gray-700">Assign "nurse1" to a "medical-staff" group:</p>
          <pre className="bg-black text-green-400 p-2 rounded mt-2 text-wrap">
            groupadd medical-staff{"\n\n"}
            usermod -aG medical-staff nurse1{"\n\n"}
            cd /home/nurse1/ && touch medical-record.txt && echo "Sensitive Information of Patient" {'>'} /home/nurse1/medical-record.txt
          </pre>
          <p className="text-sm text-gray-500 mt-2">*Group must exist or you can create it using</p>
          <p className="text-sm text-gray-500 mt-2">*Add a file with some content for the test purpose</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="font-semibold text-gray-800 mb-2">3. Check the file details.</h3>
          <p className="text-gray-700">Check the permissions and group of of the file.</p>
          <pre className="bg-black text-green-400 p-2 rounded mt-2">
            ls -l /home/nurse1/medical-record.txt
          </pre>
        </div>

        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="font-semibold text-gray-800 mb-2">3. Set Proper Permissions</h3>
          <p className="text-gray-700">Restrict a sensitive file to the "medical-staff" group:</p>
          <pre className="bg-black text-green-400 p-2 rounded mt-2">
            chown root:medical-staff /home/nurse1/medical-record.txt{"\n"}chmod 640 /home/nurse1/medical-record.txt
          </pre>
        </div>

        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="font-semibold text-gray-800 mb-2">4. Check Access Control Lists (ACL)</h3>
          <p className="text-gray-700">Check the permissions and group of of the file.</p>
          <pre className="bg-black text-green-400 p-2 rounded mt-2">
            ls -l /home/nurse1/medical-record.txt
          </pre>
        </div>
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
          <h3 className="text-xl font-semibold text-gray-700 mb-4">🖥 IoT Device Terminal</h3>
          <p className="text-gray-600 mb-4">Follow the instructions to secure your device.</p>
          <TerminalComponent />
        </div>
      )}

      <div className="bg-blue-100 p-4 rounded-md text-blue-800">
        <strong>Tip:</strong> If unsure, you can use <code className="bg-blue-200 p-1 rounded">man [command]</code> to learn about any Linux command!
      </div>
    </div>
  );
};

export default AccessControlLab;