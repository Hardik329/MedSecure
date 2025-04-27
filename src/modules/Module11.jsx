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

const Module11 = ({ title }) => {
  const objectives = [
    "Understand what a security culture is and why it matters",
    "Learn ways to embed security in daily routines of hospital staff",
    "Explore real examples of security-positive behaviors",
    "Recognize the role of leadership and communication in building a secure environment",
  ];

  const behaviors = [
    [
      "Reporting Phishing",
      "Staff are trained and encouraged to report suspicious emails immediately.",
    ],
    [
      "Locking Screens",
      "Workstations are automatically locked when unattended, and staff are trained to lock them manually.",
    ],
    [
      "Security Posters & Campaigns",
      "Visual cues around the workplace remind staff to follow good cyber hygiene.",
    ],
  ];

  const tasks = [
    "Attend security awareness workshops",
    "Use secure methods for internal communication",
    "Challenge unknown visitors in secure areas",
    "Recognize and report unusual device behavior",
    "Encourage peer support in following policies",
  ];

  const quizQuestions = [
    {
      question: "What is a key trait of a strong security culture?",
      options: [
        "Punishing every mistake",
        "Blaming users",
        "Open communication and reporting",
        "Focusing only on technology",
      ],
      correctIndex: 2,
    },
    {
      question: "Which is an example of security-positive behavior?",
      options: [
        "Sharing passwords to help a colleague",
        "Leaving systems unlocked",
        "Reporting phishing emails",
        "Writing passwords on sticky notes",
      ],
      correctIndex: 2,
    },
    {
      question: "Who is responsible for building security culture?",
      options: [
        "Only IT",
        "Only management",
        "Every employee",
        "Only external auditors",
      ],
      correctIndex: 2,
    },
    {
      question:
        "Which activity supports continuous improvement in security culture?",
      options: [
        "One-time training",
        "Annual policy update",
        "Security champions program",
        "Ignoring user feedback",
      ],
      correctIndex: 2,
    },
  ];

  const glossary = [
    {
      term: "Security Culture",
      definition:
        "The set of values, shared beliefs, and behaviors that determine how an organization addresses security.",
    },
    {
      term: "Security Champion",
      definition:
        "An individual within a team who promotes secure practices and serves as a go-to person for security guidance.",
    },
    {
      term: "Phishing",
      definition:
        "A type of cyberattack where attackers trick users into giving up sensitive information via fraudulent messages.",
    },
  ];

  return (
    <div>
      <div className="bg-[#1c2538] h-40 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Module 11: {title}</h1>
      </div>

      <ProgressBar />

      <div className="p-6 max-w-5xl mx-auto">
        <LearningObjectives objectives={objectives} />

        <VideoEmbed url="https://www.youtube.com/embed/djLuvwzui6g?si=GjzKVSpQXyi6n7Yh" />

        <Section title="Why Security Culture Matters">
          <p>
            Technology alone can’t protect patient data—people are a critical
            line of defense. A strong security culture means every staff member
            is aware, vigilant, and empowered to act safely.
          </p>
        </Section>

        <Section title="Examples of Security Culture in Practice">
          <Table headers={["Behavior", "Example"]} rows={behaviors} />
        </Section>

        <InteractiveChecklist
          title="Build Your Security Culture"
          items={tasks}
        />

        <HighlightBox>
          <strong>Case: The Role of a Security Champion</strong>
          <p>
            In one hospital, a nurse trained as a security champion helped roll
            out a secure messaging app. Staff began reporting phishing attempts
            more often, and compliance improved across departments.
          </p>
        </HighlightBox>

        <KeyTermGlossary terms={glossary} />

        <Quiz questions={quizQuestions} />

        <NextModuleCard
          title="Congratulations!"
          description="You've completed the cybersecurity training series. Review your progress or explore bonus content."
          link="/dashboard"
        />
      </div>
    </div>
  );
};

export default Module11;
