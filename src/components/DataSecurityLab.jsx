import React, { useState } from "react";
import TerminalComponent from "../components/Terminal";
import DualTerminal from "../components/DualTerminal";
const DataSecurityLab = () => {
  const [showTerminal, setShowTerminal] = useState(false);

  const steps = [
    {
      title: "1. Create a sample patient record",
      command: `cat <<EOF > patient_record.txt
{
  \"name\": \"John Doe\",
  \"dob\": \"1980-05-15\",
  \"diagnosis\": \"Hypertension\"
}
EOF`,
      note: "Write a simple JSON file to act as sensitive data."
    },
    {
      title: "2. Encrypt the record with AES-256 (using PBKDF2)",
      command: `openssl enc -aes-256-cbc -pbkdf2 -salt -iter 100000 -in patient_record.txt -out patient_record.txt.enc -k MyS3cretKey`,
      note: "Encrypt the file with AES-256 using PBKDF2 (recommended over the default key derivation)."
    },
    {
      title: "3. Decrypt and verify",
      command: `openssl enc -aes-256-cbc -d -pbkdf2 -iter 100000 -in patient_record.txt.enc -out decrypted_record.txt -k MyS3cretKey && cat decrypted_record.txt`,
      note: "Decrypt the file and display the contents using the same PBKDF2 parameters."
    },
    {
      title: "4. Generate self-signed TLS certificate",
      command: `openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365 -nodes -subj \"/C=US/ST=CA/L=SF/O=MedIoT/OU=Lab/CN=localhost\"`,
      note: "Create a cert/key pair for testing TLS."
    },
    {
      title: "5. Start a simple TLS server",
      command: `openssl s_server -accept 8443 -cert cert.pem -key key.pem -quiet`,
      note: "Launch a basic HTTPS server on port 8443."
    },
    {
      title: "6. Test TLS connection",
      command: `curl -k https://localhost:8443`,
      note: "Connect to the server and view response."
    },
    {
      title: "7. Hash the record (SHA-256)",
      command: `sha256sum patient_record.txt`,
      note: "Generate a checksum to verify integrity."
    },
  ];

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">🔒 Data Security Lab</h2>
      <p className="mb-4 text-gray-700">
        In this lab, you'll encrypt, decrypt, serve over TLS, and hash a sample patient record using OpenSSL.  
        Note: The warning about "deprecated key derivation" is resolved by using the <code>-pbkdf2</code> flag with an iteration count.
      </p>

      <div className="space-y-6">
        {steps.map((step, i) => (
          <div key={i} className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">{step.title}</h3>
            <pre className="bg-black text-green-400 p-3 rounded-md overflow-x-auto whitespace-pre-wrap">
              {step.command}
            </pre>
            <p className="mt-2 text-gray-600">{step.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <button
          onClick={() => setShowTerminal((prev) => !prev)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          {showTerminal ? "Hide Terminal" : "Launch Terminal"}
        </button>

        {showTerminal && (
          <div className="mt-4">
            <DualTerminal/>
          </div>
        )}
      </div>
    </section>
  );
};

export default DataSecurityLab;