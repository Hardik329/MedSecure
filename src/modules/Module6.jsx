import React from "react";
import Quiz from "../components/Quiz";
import LearningObjectives from "../components/LearningObjectives";
import Section from "../components/Section";
import Table from "../components/Table";
import HighlightBox from "../components/HighlightBox";
import NextModuleCard from "../components/NextModuleCard";
import { ProgressBar } from "../components/ProgressBar";
import DataSecurityLab from "../components/DataSecurityLab";

const Module6 = ({ title }) => {
  const objectives = [
    "Understand the lifecycle of sensitive healthcare data.",
    "Learn encryption best practices for data at rest and in transit.",
    "Explore secure data storage techniques in IoT devices.",
    "Evaluate the impact of compliance regulations (HIPAA, GDPR).",
    "Identify common mistakes in data handling and how to prevent them.",
  ];
  const questions = [
    {
      question: "Which encryption method is best for data at rest?",
      options: ["RSA", "Base64", "AES-256"],
      correctIndex: 2,
    },
    {
      question: "Which protocol ensures secure transmission of data?",
      options: ["FTP", "TLS", "HTTP"],
      correctIndex: 1,
    },
    {
      question: "What does HIPAA primarily regulate?",
      options: [
        "Hardware standards",
        "Health data privacy",
        "Firmware updates",
      ],
      correctIndex: 1,
    },
    {
      question: "What storage practice should be avoided?",
      options: [
        "Plaintext credentials",
        "Encrypted partitions",
        "RBAC enforcement",
      ],
      correctIndex: 0,
    },
    {
      question:
        "What is the primary benefit of using a Key Management System (KMS)?",
      options: [
        "Improved data compression",
        "Centralized key handling and rotation",
        "Better file organization",
      ],
      correctIndex: 1,
    },
  ];

  return (
    <div>
      <div className="bg-[#1c2538] h-40 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Module 6: {title}</h1>
      </div>
      <div>
        <ProgressBar />
      </div>
      <div className="max-w-5xl mx-auto px-6 py-10 text-gray-800">
        <LearningObjectives objectives={objectives} />

        <Section title="📦 What is Secure Data Management?">
          <p className="mb-4">
            In the context of Medical IoT, secure data management refers to how
            data is securely created, stored, transmitted, processed, and
            destroyed throughout its lifecycle.
          </p>
          <p>
            This includes ensuring confidentiality, integrity, and availability
            (CIA) of all patient-related information handled by medical IoT
            devices.
          </p>
        </Section>

        <Section title="🔐 Encryption Techniques">
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>At Rest:</strong> Use AES-256 to encrypt stored patient
              data.
            </li>
            <li>
              <strong>In Transit:</strong> Always use TLS 1.2+ for secure
              communications.
            </li>
            <li>
              <strong>End-to-End:</strong> Encrypt data from device sensors to
              cloud storage.
            </li>
            <li>
              <strong>Hybrid Encryption:</strong> Use symmetric encryption for
              data and asymmetric for key exchange.
            </li>
          </ul>
        </Section>

        <Section title="🧊 Secure Storage Strategies">
          <ul className="list-disc list-inside space-y-1">
            <li>Use encrypted volumes or partitions on IoT devices.</li>
            <li>Implement strict access control via RBAC or ABAC policies.</li>
            <li>
              Never store sensitive data in plaintext or local browser storage.
            </li>
            <li>Rotate encryption keys regularly using KMS solutions.</li>
            <li>Log every access and modification to critical data files.</li>
          </ul>
        </Section>

        <Section title="💡 Common Mistakes in Data Security">
          <HighlightBox>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Relying solely on encryption without proper key management.
              </li>
              <li>
                Failing to enforce multi-factor authentication on dashboards.
              </li>
              <li>Storing backups without encrypting them.</li>
              <li>
                Using outdated encryption libraries vulnerable to attacks.
              </li>
            </ul>
          </HighlightBox>
        </Section>

        <Section title="📜 Compliance and Legal Requirements">
          <p className="mb-2">
            Regulations related to secure data management include:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>HIPAA (USA):</strong> Requires healthcare organizations to
              protect health data confidentiality and integrity.
            </li>
            <li>
              <strong>GDPR (EU):</strong> Governs the protection of personal
              data of EU citizens, including health data.
            </li>
            <li>
              <strong>NIST SP 800-53:</strong> Offers a security framework for
              federal systems, adaptable to healthcare.
            </li>
            <li>
              <strong>ISO/IEC 27001:</strong> International standard for
              information security management systems (ISMS).
            </li>
          </ul>
        </Section>

        <Section title="🛠 Hands-On Task">
          <DataSecurityLab />
        </Section>

        <Quiz questions={questions} />

        <NextModuleCard
          title="Module 7: Access Control"
          description="Dive into access control mechanisms to secure medical IoT devices."
          link="/module7"
        />
      </div>
    </div>
  );
};

export default Module6;