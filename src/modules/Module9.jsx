import React from "react";
import LearningObjectives from "../components/LearningObjectives";
import Quiz from "../components/Quiz";
import Section from "../components/Section";
import Table from "../components/Table";
import HighlightBox from "../components/HighlightBox";
import NextModuleCard from "../components/NextModuleCard";
import { ProgressBar } from "../components/ProgressBar";
import InteractiveChecklist from "../components/InteractiveChecklist";
import KeyTermGlossary from "../components/KeyTermGlossary";
import VideoEmbed from "../components/VideoEmbed";
import HandsOn from "../components/HandsOn";

const ModulePasswordSecurity = ({ title }) => {
  const objectives = [
    "Understand the risks of weak passwords in medical environments",
    "Learn techniques for creating and managing secure passwords",
    "Explore tools such as password managers and MFA",
    "Identify common password-based attacks like brute force and credential stuffing",
  ];

  const bestPractices = [
    [
      "Use Strong Passwords",
      "Use at least 12 characters with numbers, symbols, and upper/lowercase letters.",
    ],
    [
      "Avoid Reuse",
      "Never reuse passwords across different systems or applications.",
    ],
    [
      "Use Password Managers",
      "Store complex, unique passwords securely without needing to remember them all.",
    ],
    [
      "Enable MFA",
      "Multi-Factor Authentication adds a layer of security beyond just passwords.",
    ],
  ];

  const tasks = [
    {
      label: "Crack password of flag.zip using 'john the ripper'.",
      flag: "123456",
      commands: [
        {
          label: "Convert zip file to hash",
          command: "zip2john flag.zip > hash.txt",
        },
        {
          label: "Crack the hash",
          command: "john hash.txt",
        },
        {
          label: "Check cracked passwords",
          command: "john --show hash.txt",
        },
      ],
    },
    {
      label:
        "Crack the hash from the file hash.txt using hashcat. You may need the wordlist rockyou.txt provided in the resources folder.",
      flag: "admin123",
      commands: [
        {
          label:
            "Use hashcat to crack the hash. (look up for the hash mode of the given hash)",
          command:
            "hashcat -m <hash mode> -a <attack mode> <hash file> <wordlist>",
        },
        {
          label: "Check cracked passwords",
          command: "hashcat -m <hash mode> -a <attack mode> --show <hash file>",
        },
      ],
    },
    {
      label:"Crack into a vulnerable SSH server using hydra and enter the cracked password.",
      flag: "password123",
      commands: [
        {
          label:"Use nmap to look for IP addresses with open SSH ports in the network.",
          command:
            "nmap 172.22.0.0/24",
        },
        {
          label: "Try to brute force the SSH server using hydra using the wordlist 'hydrapasswords.txt' provided.",
          command: "hydra -l vulnerableuser -P <wordlist> ssh://<target-ip>",
        },
      ],
    },
  ];

  const quizQuestions = [
    {
      question: "Which of these is a good password practice?",
      options: [
        "123456",
        "Qwerty",
        "Reusing passwords",
        "Using a password manager",
      ],
      correctIndex: 3,
    },
    {
      question: "What is MFA?",
      options: [
        "Medical Form Authentication",
        "Multiple Form Access",
        "Multi-Factor Authentication",
        "Mandatory First Access",
      ],
      correctIndex: 2,
    },
    {
      question: "Why avoid reusing passwords?",
      options: [
        "To avoid remembering them",
        "To save time",
        "To prevent credential stuffing",
        "To look professional",
      ],
      correctIndex: 2,
    },
    {
      question:
        "Which attack tries many possible passwords until it finds the correct one?",
      options: ["Phishing", "Brute Force", "Spoofing", "SQL Injection"],
      correctIndex: 1,
    },
  ];

  const glossary = [
    {
      term: "Password Manager",
      definition:
        "Software that helps create, store, and manage strong, unique passwords.",
    },
    {
      term: "Credential Stuffing",
      definition:
        "An attack where stolen username/password pairs are used across multiple sites.",
    },
    {
      term: "Brute Force Attack",
      definition:
        "A method where an attacker tries many password combinations until the correct one is found.",
    },
  ];

  return (
    <div>
      <div className="bg-[#1c2538] h-40 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Module 9: {title}</h1>
      </div>

      <ProgressBar />

      <div className="p-6 max-w-5xl mx-auto">
        <LearningObjectives objectives={objectives} />

        <VideoEmbed url="https://www.youtube.com/embed/t8SQo3R7qeU?si=E2TC26fnPgSCuRS0" />

        <Section title="Why Password Security Matters">
          <p>
            Weak or reused passwords are one of the most exploited entry points
            in cyberattacks. In medical settings, a single compromised account
            could expose sensitive patient data or critical systems.
          </p>
        </Section>

        <Section title="Password Best Practices">
          <Table headers={["Practice", "Explanation"]} rows={bestPractices} />
        </Section>

        <InteractiveChecklist
          title="Password Security To-Do"
          items={[
            "Use a password manager",
            "Never share your passwords",
            "Enable MFA where available",
            "Audit password usage across devices",
          ]}
        />

        <HighlightBox>
          <strong>Case: Compromised EHR Login</strong>
          <p>
            A staff member reused their hospital password on a social site that
            was later breached. Attackers accessed the EHR using those
            credentials. Strong password hygiene could have prevented it.
          </p>
        </HighlightBox>

        <KeyTermGlossary terms={glossary} />
        <HandsOn
          tasks={tasks}
          title="In this challenge we will be learning how to crack password hashes using tools like hashcat and john the ripper."
          // single={true}
        />

        <Quiz questions={quizQuestions} />

        <NextModuleCard
          title="Module 10: Incident Response"
          description="Learn how to respond effectively to security incidents in healthcare."
          link="/module10"
        />
      </div>
    </div>
  );
};

export default ModulePasswordSecurity;
