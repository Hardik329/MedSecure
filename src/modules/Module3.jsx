import React from "react";
import Quiz from "../components/Quiz";

const Module3 = () => {
  const questions = [
    {
      question: "What does 'defense in depth' refer to in network security?",
      options: [
        "Deploying a firewall only",
        "Using strong Wi-Fi passwords",
        "Layered security approach with multiple protective measures",
        "Only using HTTPS for websites",
      ],
      correctIndex: 2,
    },
    {
      question: "Which protocol should be avoided when sending sensitive patient data?",
      options: ["HTTPS", "FTPS", "Telnet", "SFTP"],
      correctIndex: 2,
    },
    {
      question: "What is the primary purpose of a firewall in a hospital network?",
      options: [
        "To provide Wi-Fi to patients",
        "To cool down data centers",
        "To control and filter network traffic based on rules",
        "To schedule medical appointments",
      ],
      correctIndex: 2,
    },
  ];  

  return (
    <div>
      <div className="bg-[#1c2538] h-40 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">
          Module 3: Network Security Basics
        </h1>
      </div>
      <div className="max-w-5xl mx-auto px-6 py-10 text-gray-800">
        <section className="module-section mb-4">
          <h2>🎯 Learning Objectives</h2>
          <ul className="list-disc list-inside pl-4 space-y-2 mb-6">
            <li>Understand basic network components and their roles.</li>
            <li>Explore firewall rules and access control principles.</li>
            <li>Implement segmentation to reduce attack surface.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Network Components
          </h2>
          <ul className="list-disc list-inside pl-4">
            <li>Routers: Direct traffic between networks</li>
            <li>Switches: Connect devices within a network</li>
            <li>Firewalls: Block unauthorized access</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Anatomy of a Network Packet
          </h2>
          <p className="mb-4">
            Understanding packet structure is key to mastering network security. Each packet carries data 
            with layers of information that routers and firewalls analyze.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {["Ethernet Header", "IP Header", "TCP/UDP Header", "Payload"].map((layer, idx) => (
              <div key={idx} className="bg-blue-100 text-blue-800 p-4 rounded-xl shadow-md">
                {layer}
              </div>
            ))}
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            🧠 Threat Scenario: A Suspicious Packet Detected
          </h2>
          <p className="mb-4">
            Imagine your hospital firewall flags a packet for inspection. Here's what your IDS (Intrusion Detection System) sees:
          </p>
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="mb-2"><strong>Source IP:</strong> 192.168.4.23</div>
            <div className="mb-2"><strong>Destination IP:</strong> 10.0.0.4</div>
            <div className="mb-2"><strong>Protocol:</strong> TCP</div>
            <div className="mb-2"><strong>Payload:</strong> `rm -rf /` (Potential Command Injection)</div>
            <div className="text-red-600 font-bold mt-2">⚠️ ALERT: Command Injection Attempt Detected!</div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            🔒 Common Protocols in Network Security
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-300 text-sm">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 text-left">Protocol</th>
                  <th className="px-4 py-2 text-left">Use Case</th>
                  <th className="px-4 py-2 text-left">Security Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["HTTP", "Web Traffic", "❌ Insecure"],
                  ["HTTPS", "Secure Web Traffic", "✅ Secure"],
                  ["FTP", "File Transfer", "❌ Insecure"],
                  ["SFTP", "Secure File Transfer", "✅ Secure"],
                  ["Telnet", "Remote Access", "❌ Insecure"],
                  ["SSH", "Secure Remote Access", "✅ Secure"],
                ].map(([proto, use, status], i) => (
                  <tr key={i} className="border-t">
                    <td className="px-4 py-2">{proto}</td>
                    <td className="px-4 py-2">{use}</td>
                    <td className="px-4 py-2">{status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Example Firewall Rule</h2>
          <p className="mb-4">This rule blocks traffic from an external untrusted IP address range.</p>
          <pre className="bg-black text-green-400 p-4 rounded-md overflow-x-auto">
            {`iptables -A INPUT -s 203.0.113.0/24 -j DROP`}
          </pre>
        </section>

        <section className="quiz mb-10">
          <Quiz questions={questions} />
        </section>

        <div className="bg-green-100 p-4 border-l-4 border-green-500 rounded-md">
          <p>
            <strong>Next:</strong> Learn how to secure individual devices in Module 4.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Module3;