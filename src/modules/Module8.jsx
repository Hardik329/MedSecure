import React from "react";
import LearningObjectives from "../components/LearningObjectives";
import Quiz from "../components/Quiz";
import Section from "../components/Section";
import Table from "../components/Table";
import HighlightBox from "../components/HighlightBox";
import NextModuleCard from "../components/NextModuleCard";
import { ProgressBar } from "../components/ProgressBar";
import { ApiPlayground } from "../components/ApiPlayground";
import LogTimeline from "../components/LogTimeline";

const Module8 = ({ title }) => {
  const objectives = [
    "Understand the importance of monitoring and auditing in Medical IoT systems.",
    "Learn the difference between real-time monitoring and periodic audits.",
    "Explore common monitoring tools and their applications in healthcare environments.",
    "Identify indicators of compromise (IoCs) and anomaly detection methods.",
    "Implement audit trails to ensure compliance and incident response readiness.",
  ];

  const vulnerabilities = [
    {
      step: "IDOR (Insecure Direct Object Reference)",
      description:
        "Accessing unauthorized records by modifying object IDs in API requests.",
    },
    {
      step: "Broken Authentication",
      description:
        "Failure in implementing token expiration or secure auth mechanisms.",
    },
    {
      step: "Rate Limiting Bypass",
      description:
        "Sending excessive requests to APIs without detection or throttling.",
    },
    {
      step: "Improper Input Validation",
      description: "Allowing injection attacks due to unsanitized input.",
    },
  ];

  const quizQuestions = [
    {
      question:
        "Which tool is commonly used to intercept and test web/API traffic?",
      options: ["Postman", "Wireshark", "Burp Suite", "Fiddler"],
      correctIndex: 2,
    },
    {
      question: "What is IDOR a result of?",
      options: [
        "Incorrect input encoding",
        "Access control failure",
        "Logging misconfiguration",
        "Improper HTTPS setup",
      ],
      correctIndex: 1,
    },
    {
      question: "Why is rate limiting important in API security?",
      options: [
        "To reduce electricity usage",
        "To log API traffic",
        "To prevent brute-force and DoS attacks",
        "To improve visual interface",
      ],
      correctIndex: 2,
    },
    {
      question: "What does input validation prevent?",
      options: [
        "Hardware issues",
        "SQL or command injection",
        "Firmware corruption",
        "Battery drain",
      ],
      correctIndex: 1,
    },
  ];

  const apiEndpoints = [
    {
      method: "GET",
      path: "/patients/1",
      description: "Simulates IDOR by accessing other patients' records.",
    },
    {
      method: "POST",
      path: "/auth/login",
      description: "Tests weak token-based login simulation.",
    },
    {
      method: "POST",
      path: "/device/upload",
      description: "Uploads unvalidated data simulating an injection risk.",
    },
  ];

  return (
    <div className="">
      <div className="bg-[#1c2538] h-40 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Module 8: {title}</h1>
      </div>
      <div>
        <ProgressBar />
      </div>
      <div className="p-6 max-w-5xl mx-auto">
        <LearningObjectives objectives={objectives} />

        <Section title="Introduction to Web & API Security">
          <p>
            APIs are vital in modern healthcare infrastructure, enabling
            devices, portals, and databases to communicate securely.
            Misconfigured APIs, however, are one of the biggest sources of data
            breaches in medical IoT.
          </p>
        </Section>

        <Section title="Common Vulnerabilities in APIs">
          <Table
            headers={["Vulnerability", "Description"]}
            rows={vulnerabilities.map((v) => [v.step, v.description])}
          />
        </Section>

        <Section title="Tools for Web & API Testing">
          <HighlightBox>
            <strong>Postman:</strong> Useful for exploring and testing APIs via
            crafted requests, header editing, and environment setup.
            <br />
            <br />
            <strong>Burp Suite:</strong> Intercept API traffic in real-time,
            inject payloads, and test for common issues like IDOR and auth
            bypass.
          </HighlightBox>
        </Section>

        <Section title="Hands-On Lab: MedVitals Vulnerable API">
          <p>
            Test the sample endpoints below to simulate vulnerabilities and see
            how APIs respond to different inputs. No real data is affected.
          </p>
          <ApiPlayground
            baseUrl="https://api.medvitals.test"
            endpoints={apiEndpoints}
          />
        </Section>

        <Section title="Real-Time Monitoring vs Periodic Auditing">
          <p className="mb-4">
            Medical IoT environments benefit from both real-time monitoring and
            scheduled audits. Real-time monitoring provides instant alerts for
            anomalies, while audits give insights into policy compliance, system
            performance, and long-term security trends.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Real-Time Monitoring:</strong> Detects and responds to
              threats as they occur. Often uses SIEM (Security Information and
              Event Management) systems.
            </li>
            <li>
              <strong>Periodic Auditing:</strong> Reviews logs and
              configurations at regular intervals to detect misconfigurations
              and violations.
            </li>
          </ul>
        </Section>

        <Section title="Indicators of Compromise (IoCs)">
          <p className="mb-4">
            IoCs are artifacts observed on a network or in an operating system
            that indicate a potential intrusion.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Unusual outbound traffic from medical devices.</li>
            <li>Multiple failed login attempts in a short period.</li>
            <li>Unexpected changes to device firmware or software.</li>
            <li>Logs indicating access outside regular operational hours.</li>
          </ul>
        </Section>

        <Section title="Monitoring Tools for Medical IoT">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Zeek:</strong> A powerful network analysis tool for
              logging real-time traffic.
            </li>
            <li>
              <strong>ELK Stack:</strong> Elasticsearch, Logstash, and Kibana —
              a stack for visualizing and analyzing logs.
            </li>
            <li>
              <strong>Wireshark:</strong> Useful for packet inspection and
              troubleshooting unusual behavior.
            </li>
            <li>
              <strong>Wazuh:</strong> An open-source SIEM that integrates
              host-based intrusion detection and log analysis.
            </li>
          </ul>
        </Section>

        <LogTimeline />

        <Quiz questions={quizQuestions} />

        <NextModuleCard
          title="Device Hardening"
          description="Learn how to reduce the attack surface of medical IoT devices through configuration and policy."
          link="/modules/device-hardening"
        />
      </div>
    </div>
  );
};

export default Module8;
