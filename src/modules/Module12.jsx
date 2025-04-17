import React from "react";
import SecurityCulturePoll from "../components/SecurityCulturePoll";
import IncidentResponseSimulator from "../components/IncidentResponseSimulator";
import LearningObjectives from "../components/LearningObjectives";
import Section from "../components/Section";
import HighlightBox from "../components/HighlightBox";
import NextModuleCard from "../components/NextModuleCard";
import { ProgressBar } from "../components/ProgressBar";
import Quiz from "../components/Quiz"; // Import the Quiz component

const Module12 = ({ title }) => {
  const objectives = [
    "Understand the importance of a strong security culture.",
    "Learn how to cultivate a security-first mindset across an organization.",
    "Recognize the key components of an effective security culture.",
    "Understand incident response processes and their role in security culture.",
    "Apply best practices to promote a security-aware organization."
  ];

  // Define quiz questions based on the module's content
  const quizQuestions = [
    {
      question: "What is the primary characteristic of a strong security culture?",
      options: [
        "Employee participation and awareness",
        "Strict enforcement of rules without flexibility",
        "Zero tolerance for mistakes",
      ],
      correctIndex: 0,
    },
    {
      question: "Which of the following is a key element of an effective security culture?",
      options: [
        "Employee awareness and involvement",
        "Isolation of the security team",
        "Heavy reliance on automation",
      ],
      correctIndex: 0,
    },
    {
      question: "What is the first step in creating a security-aware organization?",
      options: [
        "Leadership commitment",
        "Installing security tools",
        "Conducting periodic audits",
      ],
      correctIndex: 0,
    },
    {
      question: "What should an incident response plan include?",
      options: [
        "A set of predefined responses and recovery procedures",
        "Strict rules on how to punish employees",
        "A list of employees to blame for incidents",
      ],
      correctIndex: 0,
    },
    {
      question: "Which of the following is a common mistake in cultivating a security culture?",
      options: [
        "Lack of leadership engagement",
        "Providing regular security training",
        "Promoting security best practices",
      ],
      correctIndex: 0,
    },
  ];

  return (
    <div>
      <div className="bg-[#1c2538] h-40 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Module 12: {title}</h1>
      </div>
      <div>
        <ProgressBar />
      </div>
      <div className="max-w-5xl mx-auto px-6 py-10 text-gray-800">
        <LearningObjectives objectives={objectives} />

        {/* Section: Introduction to Security Culture */}
        <Section title="🌐 What is Security Culture?">
          <p className="mb-4">
            Security culture is the set of practices, behaviors, and values that organizations adopt to ensure that everyone— from executives to frontline employees— takes responsibility for safeguarding sensitive data and maintaining a secure environment.
          </p>
          <p>
            A strong security culture fosters a proactive approach to cybersecurity, where employees are educated about threats, encouraged to follow security protocols, and motivated to report suspicious activities.
          </p>
        </Section>

        {/* Section: Security Culture Poll */}
        <Section title="🗳️ Quick Poll: How Secure is Your Organization?">
          <SecurityCulturePoll />
        </Section>

        {/* Section: Incident Response Simulation */}
        <Section title="🚨 Incident Response Simulation">
          <IncidentResponseSimulator />
        </Section>

        {/* Section: Key Elements of Security Culture */}
        <Section title="🔑 Key Elements of a Strong Security Culture">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Leadership Commitment:</strong> Security starts from the top. Leadership should set the tone for security and emphasize its importance.</li>
            <li><strong>Employee Awareness:</strong> Everyone in the organization should be aware of potential threats and the importance of cybersecurity practices.</li>
            <li><strong>Accountability:</strong> Individuals should be held accountable for their actions, and proper training should be provided to reduce human error.</li>
            <li><strong>Continuous Improvement:</strong> Security practices should be regularly reviewed and updated to respond to emerging threats.</li>
            <li><strong>Clear Communication:</strong> Ensure that security policies, incidents, and updates are clearly communicated across the organization.</li>
          </ul>
        </Section>

        {/* Section: Best Practices for Security Culture */}
        <Section title="💡 Best Practices for Cultivating Security Culture">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Security Training:</strong> Regular training to ensure employees understand the latest threats and how to mitigate them.</li>
            <li><strong>Reporting Systems:</strong> Encourage employees to report incidents and suspicious activity without fear of retaliation.</li>
            <li><strong>Lead by Example:</strong> Encourage leadership to adopt and promote secure behaviors.</li>
            <li><strong>Reward Good Practices:</strong> Recognize and reward employees who demonstrate strong cybersecurity practices.</li>
            <li><strong>Incident Response Drills:</strong> Simulate potential incidents and train teams on how to respond quickly and effectively.</li>
          </ul>
        </Section>

        {/* Section: Highlight Box */}
        <Section title="⚠️ Common Pitfalls in Security Culture">
          <HighlightBox>
            <ul className="list-disc list-inside space-y-1">
              <li>Lack of leadership engagement in promoting security.</li>
              <li>Failure to provide regular training or awareness programs.</li>
              <li>Inadequate incident response planning and preparedness.</li>
              <li>Ignoring employee feedback and concerns related to security.</li>
            </ul>
          </HighlightBox>
        </Section>

        {/* Quiz Section */}
        <Section title="📝 Quiz: Test Your Knowledge on Security Culture">
          <Quiz questions={quizQuestions} />
        </Section>

        {/* Next Module Link */}
        <NextModuleCard
          title="Incident Management"
          description="Learn how to respond effectively to security incidents and mitigate potential damages."
          link="/modules/incident-management"
        />
      </div>
    </div>
  );
};

export default Module12;
