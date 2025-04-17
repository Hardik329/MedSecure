import React from "react";
import Quiz from "../components/Quiz";
import LearningObjectives from "../components/LearningObjectives";
import Section from "../components/Section";
import Table from "../components/Table";
import HighlightBox from "../components/HighlightBox";
import NextModuleCard from "../components/NextModuleCard";
import { ProgressBar } from "../components/ProgressBar";

const Module1 = ({title}) => {
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

  const objectives = [
    "Understand what Medical IoT (MIoT) is and its applications in healthcare.",
    "Identify the security risks associated with connected medical devices.",
    "Recognize common vulnerabilities in Medical IoT environments.",
    "Familiarize yourself with hands-on labs using vulnerable devices and virtual machines.",
    "Learn about the importance of secure coding practices in MIoT.",
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
      options: ["Low Battery", "Default Credentials", "Expired Prescription"],
      correctIndex: 1,
    },
  ];

  return (
    <div>
      <div className="bg-[#1c2538] h-40 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">
          Module 1: {title}
        </h1>
      </div>
      <div>
        <ProgressBar/>
      </div>
      <div className="max-w-5xl mx-auto px-6 py-10 text-gray-800">
        <LearningObjectives objectives={objectives} />

        <Section title="What is Medical IoT?">
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
        </Section>

        <Section title="Why is Medical IoT Risky?">
          <p className="mb-4">
            These devices often lack robust security due to legacy software,
            limited processing power, or poor design choices. The impact of a
            compromise can be life-threatening.
          </p>
          <HighlightBox type="error" title="Risks include:">
            <ul className="list-disc list-inside pl-4">
              <li>Unauthorized access to patient data</li>
              <li>Tampering with dosage or device settings</li>
              <li>Ransomware affecting critical operations</li>
            </ul>
          </HighlightBox>
        </Section>

        <Section title="Vulnerable Medical VMs">
          <Table
            headers={["VM", "Purpose"]}
            rows={vms.map((vm) => [vm.name, vm.purpose])}
          />
        </Section>

        <Section title="Common Vulnerable IoT Devices">
          <Table
            headers={["Device", "Notes"]}
            rows={devices.map((device) => [device.name, device.note])}
          />
        </Section>

        <Quiz questions={questions} />

        <NextModuleCard
          nextModule="2"
          description="Explore the Threat Landscape in Module 2 to understand who might target medical IoT and why."
        />
      </div>
    </div>
  );
};

export default Module1;
