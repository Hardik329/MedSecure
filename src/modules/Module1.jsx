import React from "react";
import "./Module1.css";
import Quiz from "../components/Quiz";

const Module1 = () => {
  const vms = [
    { name: "Metasploitable 2", purpose: "General-purpose vulnerable VM" },
    { name: "OWASP Broken Web Apps", purpose: "Web app vulnerabilities" },
    { name: "Security Shepherd", purpose: "Authentication & session flaws" },
    {
      name: "Medical Devices Lab VM",
      purpose: "Custom simulated medical devices",
    },
  ];

  const devices = [
    { name: "Hospira Infusion Pump", note: "Known remote exploitability" },
    { name: "Philips IntelliVue Monitor", note: "SNMP/firmware issues" },
    { name: "BLE Smart Glucometer", note: "Bluetooth replay attacks" },
    { name: "Generic PACS Server", note: "DICOM protocol exposure" },
  ];

  const questions = [
    {
      question: "What does Medical IoT refer to?",
      options: [
        "Internet-connected fridges",
        "Medical apps for diet tracking",
        "Connected medical devices and systems",
        "Robots in manufacturing",
      ],
      correctIndex: 2,
    },
    {
      question: "Which of the following is a known vulnerable medical device?",
      options: [
        "Nest Thermostat",
        "BLE Glucometer",
        "Xbox Kinect",
        "MacBook Air",
      ],
      correctIndex: 1,
    },
    {
        question: "Which of the following is a potential risk in Medical IoT?",
        options: [
          "Low Battery",
          "Default Credentials",
          "Expired Prescription",
        ],
        correctIndex: 1,
      },
    ]

  return (
    <div>
      <div className="bg-[#1c2538] h-40 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">
          Module 1: Introduction to Medical IoT
        </h1>
      </div>
      <div className="max-w-5xl mx-auto px-6 py-10 text-gray-800">
        <section className="module-section mb-4">
          <h2>🎯 Learning Objectives</h2>
          <ul className="list-disc list-inside pl-4 space-y-2 mb-6 ">
            <li>
              Understand what Medical IoT (MIoT) is and its applications in
              healthcare.
            </li>
            <li>
              Identify the security risks associated with connected medical
              devices.
            </li>
            <li>
              Recognize common vulnerabilities in Medical IoT environments.
            </li>
            <li>
              Familiarize yourself with hands-on labs using vulnerable devices
              and virtual machines.
            </li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            What is Medical IoT?
          </h2>
          <p className="mb-4">
            The Medical Internet of Things (MIoT) refers to the connected
            ecosystem of medical devices, systems, and software that communicate
            over healthcare networks. These include everything from heart
            monitors and infusion pumps to imaging systems and patient
            wearables.
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>Patient monitoring systems (ICU, remote ECG)</li>
            <li>Smart infusion pumps and ventilators</li>
            <li>Wearables and mobile health (mHealth) devices</li>
            <li>Picture Archiving and Communication Systems (PACS)</li>
            <li>Network-connected surgical robots</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Why is Medical IoT Risky?
          </h2>
          <p className="mb-4">
            These devices often lack robust security due to legacy software,
            limited processing power, or poor design choices. The impact of a
            compromise can be life-threatening.
          </p>
          <div className="bg-red-100 border-l-4 border-red-500  p-4 rounded-md">
            <p>
              <strong>Risks include:</strong>
            </p>
            <ul className="list-disc list-inside pl-4">
              <li>Unauthorized access to patient data</li>
              <li>Tampering with dosage or device settings</li>
              <li>Ransomware affecting critical operations</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Vulnerable Medical VMs
          </h2>
          <table className="w-full table-auto border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-4 py-2">VM</th>
                <th className="text-left px-4 py-2">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {vms.map((vm, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{vm.name}</td>
                  <td className="px-4 py-2">{vm.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Common Vulnerable IoT Devices
          </h2>
          <table className="w-full table-auto border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-4 py-2">Device</th>
                <th className="text-left px-4 py-2">Notes</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((device, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{device.name}</td>
                  <td className="px-4 py-2">{device.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="quiz mb-10">
          <Quiz questions={questions}/>
        </section>

        <div className="bg-green-100 p-4 border-l-4 border-green-500 rounded-md">
          <p>
            <strong>Next:</strong> Explore the Threat Landscape in Module 2 to
            understand who might target medical IoT and why.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Module1;
