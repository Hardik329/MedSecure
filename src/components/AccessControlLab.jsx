import TerminalComponent from "./Terminal";

const AccessControlLab = () => {
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
          <pre className="bg-black text-green-400 p-2 rounded mt-2">
            usermod -aG medical-staff nurse1
          </pre>
          <p className="text-sm text-gray-500 mt-2">*Group must exist or you can create it using <code className="bg-gray-200 p-1 rounded">sudo groupadd medical-staff</code></p>
        </div>

        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="font-semibold text-gray-800 mb-2">3. Set Proper Permissions</h3>
          <p className="text-gray-700">Restrict a sensitive file to the "medical-staff" group:</p>
          <pre className="bg-black text-green-400 p-2 rounded mt-2">
            chown root:medical-staff /path/to/medical-record.txt{"\n"}chmod 640 /path/to/medical-record.txt
          </pre>
        </div>

        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="font-semibold text-gray-800 mb-2">4. Check Access Control Lists (ACL)</h3>
          <p className="text-gray-700">View permissions for a file:</p>
          <pre className="bg-black text-green-400 p-2 rounded mt-2">
            ls -l /path/to/medical-record.txt
          </pre>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-gray-800 font-semibold mb-2">🚀 Launch the Terminal Below:</p>
        <TerminalComponent />
      </div>

      <div className="bg-blue-100 p-4 rounded-md text-blue-800">
        <strong>Tip:</strong> If unsure, you can use <code className="bg-blue-200 p-1 rounded">man [command]</code> to learn about any Linux command!
      </div>
    </div>
  );
};

export default AccessControlLab;
