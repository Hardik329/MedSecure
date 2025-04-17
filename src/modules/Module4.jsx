import React from "react";
import LearningObjectives from "../components/LearningObjectives";
import Quiz from "../components/Quiz";
import Section from "../components/Section";
import Table from "../components/Table";
import HighlightBox from "../components/HighlightBox";
import NextModuleCard from "../components/NextModuleCard";
import {ProgressBar} from "../components/ProgressBar";

const Module4 = ({title}) => {
  const objectives = [
    "Understand the concept and importance of device hardening",
    "Learn specific techniques for hardening medical IoT devices",
    "Explore best practices and frameworks like CIS Benchmarks",
    "Assess hardening status using checklists or tools",
  ];

  const hardeningSteps = [
    { step: "Remove Unnecessary Services", description: "Disable unused services and ports to reduce attack surface." },
    { step: "Change Default Credentials", description: "Default usernames and passwords should be changed immediately." },
    { step: "Apply Patches and Updates", description: "Regular updates address known vulnerabilities." },
    { step: "Configure Firewalls", description: "Limit incoming and outgoing traffic based on strict rules." },
    { step: "Enable Logging and Auditing", description: "Logs help detect anomalies and breaches." },
    { step: "Use Antivirus/EDR Tools", description: "Install security tools to prevent and detect malware." },
    { step: "Set Permissions Properly", description: "Use least privilege access control." },
    { step: "Encrypt Data", description: "Ensure both data at rest and in transit is encrypted." },
  ];

  const quizQuestions = [
    {
      question: "Why is device hardening especially important in Medical IoT?",
      options: [
        "To save battery life",
        "To prevent physical theft",
        "To reduce the attack surface of vulnerable systems",
        "To make the device waterproof",
      ],
      answer: "To reduce the attack surface of vulnerable systems",
    },
    {
      question: "Which of the following is NOT a common device hardening technique?",
      options: [
        "Disabling unnecessary services",
        "Using default admin credentials",
        "Installing patches",
        "Configuring firewalls",
      ],
      answer: "Using default admin credentials",
    },
    {
      question: "What is the purpose of enabling logging and auditing?",
      options: [
        "Improve performance",
        "Enable password resets",
        "Track user and system activity for security",
        "Prevent overheating",
      ],
      answer: "Track user and system activity for security",
    },
    {
      question: "What does the CIS Benchmark provide?",
      options: [
        "A gaming leaderboard",
        "A set of guidelines for system hardening",
        "Hardware specifications",
        "Encryption keys",
      ],
      answer: "A set of guidelines for system hardening",
    },
  ];

  return (
    <div className="">
      <div className="bg-[#1c2538] h-40 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">
          Module 1: {title}
        </h1>
      </div>
      <div>
        <ProgressBar/>
      </div>
      <div className="p-6 max-w-5xl mx-auto">
        <LearningObjectives objectives={objectives} />

        <Section title="Why Device Hardening?">
          <p>
            Device hardening is the process of securing a system by reducing its
            surface of vulnerability. Medical IoT devices often run on lightweight,
            outdated operating systems and are deployed in critical environments,
            making hardening vital to prevent exploitation.
          </p>
        </Section>

        <Section title="Common Device Hardening Steps">
          <Table
            headers={["Step", "Description"]}
            rows={hardeningSteps.map((step) => [step.step, step.description])}
          />
        </Section>

        <Section title="CIS Benchmarks and Hardening Guides">
          <p>
            The <strong>Center for Internet Security (CIS)</strong> provides
            widely accepted hardening standards for various platforms, including
            embedded Linux, Windows, and cloud environments. Following these
            benchmarks ensures baseline security across systems.
          </p>
        </Section>

        <Section title="Real-World Case Study">
          <HighlightBox>
            <strong>Case: Infusion Pump Vulnerability</strong>
            <p>
              A study found that an infusion pump had hardcoded credentials and
              unnecessary open ports. Attackers could exploit these to remotely
              alter drug dosages. Simple hardening techniques like disabling unused
              ports and setting strong credentials could have prevented this.
            </p>
          </HighlightBox>
        </Section>

        <Quiz questions={quizQuestions} />

        <NextModuleCard
          title="OSINT & Shodan"
          description="Explore how attackers gather intelligence on medical devices and networks using open-source tools."
          link="/modules/osint-shodan"
        />
      </div>
    </div>
  );
}

export default Module4;