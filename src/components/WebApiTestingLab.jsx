import TerminalComponent from "./Terminal";

const WebApiTestingLab = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        🌐 Web & API Testing Hands-On Lab
      </h2>
      <p className="text-gray-700 mb-6">
        Practice basic web and API security testing steps below. Follow the instructions and run the given commands or API requests!
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="font-semibold text-gray-800 mb-2">1. Test for IDOR (Insecure Direct Object Reference)</h3>
          <p className="text-gray-700 text-wrap">
            Simulate unauthorized access by changing an ID in an API request:
          </p>
          <pre className="bg-black text-green-400 p-2 rounded mt-2 text-wrap">
            curl -X GET https://api.medvitals.test/patients/2
          </pre>
          <p className="text-sm text-gray-500 mt-2">*Change the ID (e.g., /patients/1 to /patients/2) and observe the response.</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="font-semibold text-gray-800 mb-2">2. Check Authentication Mechanism</h3>
          <p className="text-gray-700">
            Attempt to login with a weak password or missing token:
          </p>
          <pre className="bg-black text-green-400 p-2 rounded mt-2 text-wrap">
            curl -X POST https://api.medvitals.test/auth/login -d 'username=testuser&amp;password=weakpassword'
          </pre>
          <p className="text-sm text-gray-500 mt-2 text-wrap">*If the login succeeds without proper checks, it indicates weak authentication.</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="font-semibold text-gray-800 mb-2">3. Try Input Injection Attack</h3>
          <p className="text-gray-700">
            Simulate sending suspicious input to test for improper input validation:
          </p>
          <pre className="bg-black text-green-400 p-2 rounded mt-2 text-wrap">
            curl -X POST https://api.medvitals.test/device/upload -d '{"filename"}:{"../../../etc/passwd"}'
          </pre>
          <p className="text-sm text-gray-500 mt-2">*Watch if the server properly rejects suspicious file paths or input.</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="font-semibold text-gray-800 mb-2">4. Enable Simple Rate Limiting Test</h3>
          <p className="text-gray-700">
            Send multiple rapid requests to check if rate limiting exists:
          </p>
          <pre className="bg-black text-green-400 p-2 rounded mt-2">
{`for i in {1..20}; do 
  curl -X GET https://api.medvitals.test/patients/1
done`}
          </pre>
          <p className="text-sm text-gray-500 mt-2">*If server does not block or slow you down, rate limiting may be missing.</p>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-gray-800 font-semibold mb-2">🚀 Launch the Terminal Below:</p>
        <TerminalComponent />
      </div>

      <div className="bg-blue-100 p-4 rounded-md text-blue-800 text-wrap">
        <strong>Tip:</strong> If you need help with curl options, type <code className="bg-blue-200 p-1 rounded">man curl</code> or <code className="bg-blue-200 p-1 rounded">curl --help</code> in the terminal!
      </div>
    </div>
  );
};

export default WebApiTestingLab;
