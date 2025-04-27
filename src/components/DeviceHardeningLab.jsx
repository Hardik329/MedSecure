import TerminalComponent from "./Terminal";

const DeviceHardeningLab = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        🛡 Device Hardening Hands-On Lab
      </h2>
      <p className="text-gray-700 mb-6">
        Practice basic device hardening steps in a simulated terminal below. Follow the instructions and run the given commands!
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="font-semibold text-gray-800 mb-2">1. Check Open Ports</h3>
          <p className="text-gray-700">Use <code className="bg-gray-200 p-1 rounded">netstat</code> to list open ports:</p>
          <pre className="bg-black text-green-400 p-2 rounded mt-2">
            netstat -tuln
          </pre>
        </div>

        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="font-semibold text-gray-800 mb-2">2. Disable an Unused Service</h3>
          <p className="text-gray-700">Example: Stop FTP service if running:</p>
          <pre className="bg-black text-green-400 p-2 rounded mt-2">
            sudo systemctl stop vsftpd
          </pre>
          <p className="text-sm text-gray-500 mt-2">*If service not found, that's OK — it means it’s not running!</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="font-semibold text-gray-800 mb-2">3. Set a Strong Password</h3>
          <p className="text-gray-700">Change password for a user (try it for "testuser" if available):</p>
          <pre className="bg-black text-green-400 p-2 rounded mt-2">
            sudo passwd testuser
          </pre>
        </div>

        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="font-semibold text-gray-800 mb-2">4. Enable Basic Firewall</h3>
          <p className="text-gray-700">Enable and check UFW firewall:</p>
          <pre className="bg-black text-green-400 p-2 rounded mt-2">
            sudo ufw enable{"\n"}sudo ufw status
          </pre>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-gray-800 font-semibold mb-2">🚀 Launch the Terminal Below:</p>
        <TerminalComponent />
      </div>

      <div className="bg-green-100 p-4 rounded-md text-green-800">
        <strong>Tip:</strong> If you get stuck, type <code className="bg-green-200 p-1 rounded">help</code> or <code className="bg-green-200 p-1 rounded">man [command]</code> for assistance!
      </div>
    </div>
  );
};

export default DeviceHardeningLab;
