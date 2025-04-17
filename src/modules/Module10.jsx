// Module: Password Security (already done above)
// The following modules will follow similar structure and detail:

// Module: Incident Response
import React from "react";
import LearningObjectives from "../components/LearningObjectives";
import Quiz from "../components/Quiz";
import Section from "../components/Section";
import Table from "../components/Table";
import HighlightBox from "../components/HighlightBox";
import NextModuleCard from "../components/NextModuleCard";
import { ProgressBar } from "../components/ProgressBar";
import KeyTermGlossary from "../components/KeyTermGlossary";
import InteractiveChecklist from "../components/InteractiveChecklist";
import VideoEmbed from "../components/VideoEmbed";

const Module10 = ({ title }) => {
  const objectives = [
    "Understand the components of an effective incident response plan",
    "Learn how to identify and classify cybersecurity incidents",
    "Explore response workflows tailored for Medical IoT environments",
    "Understand post-incident activities like recovery and reporting",
  ];

  const responseSteps = [
    { step: "Preparation", description: "Develop policies, communication plans, and assign roles before an incident occurs." },
    { step: "Detection & Analysis", description: "Identify and assess suspicious activity or breaches through monitoring tools." },
    { step: "Containment", description: "Isolate affected systems to prevent spread or further damage." },
    { step: "Eradication", description: "Remove the root cause, such as malware or unauthorized access." },
    { step: "Recovery", description: "Restore systems to normal operation and monitor for signs of reinfection." },
    { step: "Post-Incident Review", description: "Conduct a review to improve future response processes and document findings." },
  ];

  const quizQuestions = [
    {
      question: "What is the first phase of incident response?",
      options: ["Containment", "Eradication", "Preparation", "Recovery"],
      answer: "Preparation",
    },
    {
      question: "Why is containment important?",
      options: ["To notify media quickly", "To allow devices to keep running normally", "To limit damage and prevent spread of threats", "To increase traffic to websites"],
      answer: "To limit damage and prevent spread of threats",
    },
    {
      question: "What should happen after systems are recovered?",
      options: ["Ignore and move on", "Uninstall all software", "Conduct a post-incident review", "Reboot the router only"],
      answer: "Conduct a post-incident review",
    },
    {
      question: "Why is Medical IoT incident response different?",
      options: ["It involves devices tied to patient safety", "It's always handled by software vendors", "It doesn't require documentation", "It never involves actual security threats"],
      answer: "It involves devices tied to patient safety",
    },
  ];

  return (
    <div className="">
      <div className="bg-[#1c2538] h-40 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">
          Module 10: {title}
        </h1>
      </div>
      <div>
        <ProgressBar />
      </div>
      <div className="p-6 max-w-5xl mx-auto">
        <LearningObjectives objectives={objectives} />

        <VideoEmbed url="https://www.youtube.com/embed/MsGl6lX-YaI?si=lwGEtybesQ7g005o" />

        <Section title="Why Incident Response Matters">
          <p>
            Incident response in healthcare protects not only data but also patient well-being. A slow or uncoordinated response can result in operational downtime, legal issues, or patient harm.
          </p>
        </Section>

        <Section title="Phases of Incident Response">
          <Table
            headers={["Phase", "Description"]}
            rows={responseSteps.map((item) => [item.step, item.description])}
          />
        </Section>

        <InteractiveChecklist title="IR Plan Readiness" items={[
          "Is there an incident response team assigned?",
          "Is monitoring active for all IoT endpoints?",
          "Do you have a containment playbook?",
          "Are staff trained on IR escalation procedures?",
        ]} />

        <Section title="Medical IoT Specific Challenges">
          <p>
            Many medical devices cannot be easily patched or disconnected. Incident response must factor in the clinical impact, device uptime requirements, and regulatory reporting.
          </p>
        </Section>

        <Section title="Real-World Case Study">
          <HighlightBox>
            <strong>Case: Ransomware on Hospital IoT Network</strong>
            <p>
              A ransomware attack crippled a hospital network, encrypting access to imaging and patient tracking systems. Swift containment and recovery limited the impact to under 48 hours.
            </p>
          </HighlightBox>
        </Section>

        <KeyTermGlossary terms={[
          { term: "Containment", definition: "A set of actions taken to isolate the threat and stop its spread." },
          { term: "Eradication", definition: "Removing malicious code, accounts, or persistence mechanisms after an attack." },
          { term: "Playbook", definition: "Predefined actions and workflows for incident handling." },
        ]} />

        <Quiz questions={quizQuestions} />

        <NextModuleCard
          title="Compliance & Monitoring"
          description="Explore the standards and continuous monitoring strategies for medical systems."
          link="/modules/compliance-monitoring"
        />
      </div>
    </div>
  );
};

export default Module10;
