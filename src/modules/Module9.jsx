// Module: Password Security
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

const ModulePasswordSecurity = ({ title }) => {
  const objectives = [
    "Understand the risks of weak passwords in medical environments",
    "Learn techniques for creating and managing secure passwords",
    "Explore tools such as password managers and MFA",
    "Identify common password-based attacks like brute force and credential stuffing",
  ];

  const bestPractices = [
    ["Use Strong Passwords", "Use at least 12 characters with numbers, symbols, and upper/lowercase letters."],
    ["Avoid Reuse", "Never reuse passwords across different systems or applications."],
    ["Use Password Managers", "Store complex, unique passwords securely without needing to remember them all."],
    ["Enable MFA", "Multi-Factor Authentication adds a layer of security beyond just passwords."],
  ];

  const quizQuestions = [
    {
      question: "Which of these is a good password practice?",
      options: ["123456", "Qwerty", "Reusing passwords", "Using a password manager"],
      answer: "Using a password manager",
    },
    {
      question: "What is MFA?",
      options: ["Medical Form Authentication", "Multiple Form Access", "Multi-Factor Authentication", "Mandatory First Access"],
      answer: "Multi-Factor Authentication",
    },
    {
      question: "Why avoid reusing passwords?",
      options: ["To avoid remembering them", "To save time", "To prevent credential stuffing", "To look professional"],
      answer: "To prevent credential stuffing",
    },
    {
      question: "Which attack tries many possible passwords until it finds the correct one?",
      options: ["Phishing", "Brute Force", "Spoofing", "SQL Injection"],
      answer: "Brute Force",
    },
  ];

  const glossary = [
    { term: "Password Manager", definition: "Software that helps create, store, and manage strong, unique passwords." },
    { term: "Credential Stuffing", definition: "An attack where stolen username/password pairs are used across multiple sites." },
    { term: "Brute Force Attack", definition: "A method where an attacker tries many password combinations until the correct one is found." },
  ];

  return (
    <div>
      <div className="bg-[#1c2538] h-40 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Module 9: {title}</h1>
      </div>

      <ProgressBar />

      <div className="p-6 max-w-5xl mx-auto">
        <LearningObjectives objectives={objectives} />

        <VideoEmbed  url="https://www.youtube.com/embed/t8SQo3R7qeU?si=E2TC26fnPgSCuRS0" />

        <Section title="Why Password Security Matters">
          <p>
            Weak or reused passwords are one of the most exploited entry points in cyberattacks. In medical settings, a single compromised account could expose sensitive patient data or critical systems.
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
            A staff member reused their hospital password on a social site that was later breached. Attackers accessed the EHR using those credentials. Strong password hygiene could have prevented it.
          </p>
        </HighlightBox>

        <KeyTermGlossary terms={glossary} />

        <Quiz questions={quizQuestions} />

        <NextModuleCard
          title="Incident Response"
          description="Learn the phases of responding to cyber incidents in medical IoT settings."
          link="/modules/incident-response"
        />
      </div>
    </div>
  );
};

export default ModulePasswordSecurity;
