import React from "react";
import Quiz from "../components/Quiz";
import LearningObjectives from "../components/LearningObjectives";
import Section from "../components/Section";
import Table from "../components/Table";
import HighlightBox from "../components/HighlightBox";
import NextModuleCard from "../components/NextModuleCard";
import { ProgressBar } from "../components/ProgressBar";
import NetworkLab from "../components/NetworkLab";
import TerminalLab from "../components/TerminalLab";

const Module3 = ({ title }) => {
  const objectives = [
    "Understand key network security concepts and protocols.",
    "Learn about secure communication mechanisms.",
    "Identify vulnerabilities in basic network setups.",
    "Familiarize with defensive network security strategies."
  ];

  const questions = [
    {
      question: "Which protocol is used to securely transfer web pages?",
      options: ["HTTP", "HTTPS", "FTP"],
      correctIndex: 1,
    },
    {
      question: "What is the purpose of a firewall?",
      options: [
        "To provide internet access",
        "To filter network traffic",
        "To host websites",
      ],
      correctIndex: 1,
    },
    {
      question: "Which port is commonly used by SSH?",
      options: ["22", "80", "443"],
      correctIndex: 0,
    },
    {
      question: "Which tool can be used to analyze network traffic?",
      options: ["Wireshark", "Photoshop", "VLC"],
      correctIndex: 0,
    },
    {
      question: "What does VPN stand for?",
      options: [
        "Virtual Personal Network",
        "Virtual Private Network",
        "Verified Protected Network",
      ],
      correctIndex: 1,
    }
  ];

  return (
    <div>
      <div className="bg-[#1c2538] h-40 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Module 3: {title}</h1>
      </div>
      <div>
        <ProgressBar />
      </div>
      <div className="max-w-5xl mx-auto px-6 py-10 text-gray-800">
        <LearningObjectives objectives={objectives} />

        <Section title="🌐 Basics of Network Security">
          <p className="mb-4">
            Network security is the practice of protecting the integrity, confidentiality, and availability of data as it is transmitted across or accessed from networks. It involves various measures such as firewalls, secure protocols, encryption, and monitoring systems.
          </p>
        </Section>

        <Section title="📡 Common Threats and Protections">
          <ul className="list-disc list-inside space-y-1">
            <li>Man-in-the-middle attacks</li>
            <li>Packet sniffing</li>
            <li>Unauthorized access</li>
            <li>Firewall implementation</li>
            <li>VPNs for encrypted tunnels</li>
            <li>Secure communication protocols like HTTPS and SSH</li>
          </ul>
        </Section>


        <Section title="🖥️ Packet Inspection Exercise">
          <p className="mb-4">
            Imagine your hospital firewall flags a suspicious packet. Below is a simulated report your IDS (Intrusion Detection System) generated. Study it and analyze whether it indicates a threat:
          </p>
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="mb-2"><strong>Source IP:</strong> 192.168.4.23</div>
            <div className="mb-2"><strong>Destination IP:</strong> 10.0.0.4</div>
            <div className="mb-2"><strong>Protocol:</strong> TCP</div>
            <div className="mb-2"><strong>Payload:</strong> rm -rf / (Potential Command Injection)</div>
            <div className="text-red-600 font-bold mt-2">⚠️ ALERT: Command Injection Attempt Detected!</div>
          </div>
        </Section>

        <Section title="📜 Example Firewall Rule">
          <p className="mb-4">
            This rule blocks traffic from an external untrusted IP address range.
          </p>
          <pre className="bg-black text-green-400 p-4 rounded-md overflow-x-auto">
            {`iptables -A INPUT -s 203.0.113.0/24 -j DROP`}
          </pre>
        </Section>

        <Section title="🖥️ Simulated Network Terminal Lab">
          <p className="mb-4">
            Use the simulated network terminal below to practice basic security commands in a safe environment.
          </p>
          <NetworkLab />
        </Section>
        

        <Quiz questions={questions} />

        <NextModuleCard
          title="Device Hardening"
          description="Explore techniques to strengthen IoT devices against threats through configurations, updates, and physical security."
          link="/modules/device-hardening"
        />
      </div>
    </div>
  );
};

export default Module3;
