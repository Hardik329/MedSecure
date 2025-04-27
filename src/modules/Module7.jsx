import React from "react";
import Quiz from "../components/Quiz";
import LearningObjectives from "../components/LearningObjectives";
import Section from "../components/Section";
import HighlightBox from "../components/HighlightBox";
import NextModuleCard from "../components/NextModuleCard";
import { ProgressBar } from "../components/ProgressBar";
import AccessControlDiagram from "../components/AccessControlDiagram";
import HandsOn from "../components/HandsOn";
import AccessControlLab from "../components/AccessControlLab";

const Module7 = () => {
  const objectives = [
    "Understand the concept of access control and its importance in Medical IoT.",
    "Differentiate between types of access control: MAC, DAC, and RBAC.",
    "Learn how access control is implemented in connected healthcare systems.",
    "Identify common access control vulnerabilities and misconfigurations.",
    "Apply best practices for securing access to medical devices and data.",
  ];
  const questions = [
    {
      question:
        "Which access control model assigns permissions based on user roles?",
      options: ["MAC", "RBAC", "DAC"],
      correctIndex: 1,
    },
    {
      question: "What does DAC stand for?",
      options: [
        "Distributed Access Control",
        "Discretionary Access Control",
        "Direct Authorization Control",
      ],
      correctIndex: 1,
    },
    {
      question: "Which of the following is a common access control issue?",
      options: [
        "Strong password policies",
        "Least privilege",
        "Default credentials in production",
      ],
      correctIndex: 2,
    },
    {
      question: "What is the key benefit of RBAC in healthcare settings?",
      options: [
        "Anyone can access any record",
        "Automatic encryption",
        "Streamlined permissions based on job roles",
      ],
      correctIndex: 2,
    },
  ];

  return (
    <div>
      <div className="bg-[#1c2538] h-40 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">
          Module 7: Access Control
        </h1>
      </div>
      <div>
        <ProgressBar />
      </div>
      <div className="max-w-5xl mx-auto px-6 py-10 text-gray-800">
        <LearningObjectives objectives={objectives} />

        <Section title="What is Access Control?">
          <p className="mb-4">
            Access control is a fundamental security concept that governs who
            can access systems and data. In Medical IoT, access control ensures
            that only authorized personnel can interact with sensitive devices
            and patient information.
          </p>
        </Section>

        <Section title="Types of Access Control Models">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Mandatory Access Control (MAC):</strong> Permissions are
              assigned by a central authority based on policy.
            </li>
            <li>
              <strong>Discretionary Access Control (DAC):</strong> Owners
              determine access rights for resources.
            </li>
            <li>
              <strong>Role-Based Access Control (RBAC):</strong> Access is based
              on organizational roles, improving scalability and manageability.
            </li>
          </ul>
        </Section>

        <Section title="Access Control in Medical IoT">
          <p className="mb-4">Proper access control in Medical IoT involves:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Enforcing authentication and session management.</li>
            <li>Using RBAC for role-aligned access.</li>
            <li>Logging and monitoring access events.</li>
            <li>Disabling unused accounts and default credentials.</li>
          </ul>
        </Section>

        <Section title="Common Vulnerabilities">
          <HighlightBox type="error" title="Watch out for:">
            <ul className="list-disc list-inside">
              <li>Hardcoded credentials</li>
              <li>Insecure user provisioning</li>
              <li>Lack of session timeouts</li>
              <li>Unrestricted administrative access</li>
            </ul>
          </HighlightBox>
        </Section>

        <Section title="Visual Overview: Access Control Models">
          <AccessControlDiagram />
        </Section>

        <section className="mb-10">
          <AccessControlLab />
        </section>

        <Quiz questions={questions} />

        <NextModuleCard
          title="Module 8: Web & API Testing"
          description="Explore web and API testing in Module 8 to learn how to secure web applications and APIs in medical IoT."
          link="/module8"
        />
      </div>
    </div>
  );
};

export default Module7;






