import React from "react";
import Quiz from "../components/Quiz";
import DeviceHardeningLab from "../components/DeviceHardeningLab";
import DualTerminal from "../components/DualTerminal";
import HandsOn from "../components/HandsOn";

const Module4 = () => {
  const questions = [
    {
      question: "What is the goal of 'device hardening'?",
      options: [
        "To improve display quality",
        "To prevent physical damage to devices",
        "To reduce attack surface by securing configurations and settings",
        "To improve software animations",
      ],
      correctIndex: 2,
    },
    {
      question: "Which of these is a best practice in device hardening?",
      options: [
        "Using default admin credentials",
        "Disabling unused services and ports",
        "Allowing unrestricted remote access",
        "Skipping firmware updates",
      ],
      correctIndex: 1,
    },
    {
      question: "What does firmware signing help prevent?",
      options: [
        "Accidental system reboots",
        "Installation of unauthorized firmware and tampering",
        "Memory overflow",
        "Poor device performance",
      ],
      correctIndex: 1,
    },
  ];

  return (
    <div>
      <div className="bg-[#1c2538] h-40 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">
          Module 4: Device Hardening
        </h1>
      </div>
      <div className="max-w-5xl mx-auto px-6 py-10 text-gray-800">
        <section className="module-section mb-4">
          <h2>🎯 Learning Objectives</h2>
          <ul className="list-disc list-inside pl-4 space-y-2 mb-6">
            <li>Apply hardening techniques to medical devices.</li>
            <li>Update and patch firmware securely.</li>
            <li>Enable access controls and encryption.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            What is Device Hardening?
          </h2>
          <p className="text-gray-700">
            Device hardening refers to the process of securing a device by
            reducing its attack surface. This includes turning off unnecessary
            services, applying patches, setting strong authentication, and
            configuring firewalls.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            🧰 Secure Your Device – A Checklist
          </h2>
          <ul className="space-y-2">
            {[
              "🔐 Change default usernames and passwords",
              "🛑 Disable unused ports and services",
              "📦 Regularly apply firmware/software updates",
              "🛡 Enable device firewalls",
              "🚫 Disable unnecessary Bluetooth/Wi-Fi access",
              "📝 Set up logging and auditing",
            ].map((item, i) => (
              <li
                key={i}
                className="bg-white rounded-md shadow-md px-4 py-2 border flex items-center space-x-2"
              >
                <input type="checkbox" className="h-5 w-5 text-green-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            🔁 Before vs After Hardening
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-100 p-4 rounded-lg">
              <h3 className="font-bold text-red-600 mb-2">Before</h3>
              <ul className="list-disc list-inside text-red-700 space-y-1">
                <li>Default credentials enabled</li>
                <li>Open SSH & FTP ports</li>
                <li>No password policy</li>
                <li>Unpatched firmware</li>
              </ul>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="font-bold text-green-700 mb-2">After</h3>
              <ul className="list-disc list-inside text-green-800 space-y-1">
                <li>Strong passwords with 90-day rotation</li>
                <li>Only HTTPS/SSH enabled</li>
                <li>Password length ≥ 12 characters</li>
                <li>Latest firmware version 4.3.7</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            🧩 Spot the Misconfig
          </h2>
          <p className="mb-2 text-gray-600">
            What’s wrong with this device config?
          </p>
          <div className="bg-black text-green-400 font-mono p-4 rounded-md overflow-x-auto">
            {`{
          "username": "admin",
          "password": "admin123",
          "ssh_enabled": true,
          "ftp_enabled": true,
          "firewall_status": "disabled"
        }`}
          </div>
          <div className="mt-3 text-gray-700">
            ❓<strong>Your Turn:</strong> What are the red flags? Think and
            check below!
          </div>
          <details className="mt-2">
            <summary className="cursor-pointer text-blue-600 underline">
              💡 View Answer
            </summary>
            <ul className="list-disc list-inside mt-2 text-red-600 space-y-1">
              <li>Weak default password</li>
              <li>FTP enabled (insecure)</li>
              <li>Firewall is turned off</li>
            </ul>
          </details>
        </section>

        <section className="mb-10">
          <DeviceHardeningLab />
        </section>

        <section className="quiz mb-10">
          <Quiz questions={questions} />
        </section>

        <div className="bg-green-100 p-4 border-l-4 border-green-500 rounded-md">
          <p>
            <strong>Next:</strong> Use OSINT & Shodan to assess exposure in
            Module 5.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Module4;
