import React from "react";
import Quiz from "../components/Quiz";
import { ProgressBar } from "../components/ProgressBar";
import MedicalIoTThreatActorsLab from "../components/MedicalIoTThreatActorsLab";
import NextModuleCard from "../components/NextModuleCard";

const Module2 = () => {
  const questions = [
    {
      question:
        "Who are considered primary threat actors targeting Medical IoT systems?",
      options: [
        "Gamers",
        "Hacktivists and Nation-State actors",
        "Students",
        "E-commerce platforms",
      ],
      correctIndex: 1,
    },
    {
      question:
        "Which of these is an example of a ransomware attack targeting healthcare?",
      options: ["SolarWinds", "WannaCry", "BlueKeep", "Heartbleed"],
      correctIndex: 1,
    },
    {
      question: "Why are hospitals prime targets for cyberattacks?",
      options: [
        "They use a lot of bandwidth",
        "They have old computers",
        "They store sensitive patient data and rely on critical systems",
        "They operate in many countries",
      ],
      correctIndex: 2,
    },
  ];

  return (
    <div>
      <div className="bg-[#1c2538] h-40 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">
          Module 2: Threat Landscape
        </h1>
      </div>
      <div>
        <ProgressBar />
      </div>
      <div className="max-w-5xl mx-auto px-6 py-10 text-gray-800">
        <section className="module-section mb-4">
          <h2>🎯 Learning Objectives</h2>
          <ul className="list-disc list-inside pl-4 space-y-2 mb-6">
            <li>Identify various threat actors targeting medical IoT.</li>
            <li>Understand motivations behind cyberattacks in healthcare.</li>
            <li>Recognize common tactics and attack surfaces.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Types of Threat Actors
          </h2>
          <p className="mb-4">
            Threat actors include nation-states, cybercriminals, hacktivists,
            and even insiders. Their motivations range from espionage and
            financial gain to political statements.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Attack Motivations
          </h2>
          <ul className="list-disc list-inside pl-4">
            <li>Disrupt healthcare services during crises</li>
            <li>Steal sensitive patient data for financial gain</li>
            <li>Manipulate device settings to cause harm</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Real-World Threats in the Medical IoT Ecosystem
          </h2>
          <p className="mb-4">
            The threat landscape for Medical IoT is shaped by a combination of
            technical vulnerabilities, human error, and the high-value nature of
            healthcare data. Threat actors range from cybercriminals seeking
            financial gain to nation-state attackers targeting critical
            infrastructure.
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2 mb-6">
            <li>
              Insider threats, such as disgruntled staff or misconfigured
              systems
            </li>
            <li>
              Ransomware gangs targeting hospital networks to disrupt services
            </li>
            <li>Hacktivists exposing weakly protected patient information</li>
            <li>
              Advanced Persistent Threats (APTs) for espionage or sabotage
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            🩺 Case Study: WannaCry Attack on the NHS (2017)
          </h2>
          <p className="mb-4">
            In May 2017, the UK’s National Health Service (NHS) became one of
            the most prominent victims of the global WannaCry ransomware attack.
            Thousands of devices, including MRI scanners and blood storage
            refrigerators, were affected due to outdated Windows systems.
          </p>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-md">
            <ul className="list-disc list-inside pl-4">
              <li>Disrupted appointments and emergency care services</li>
              <li>Exposed critical dependencies on legacy devices</li>
              <li>Estimated cost of recovery: £92 million</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Who's Targeting Medical IoT and Why?
          </h2>
          <p className="mb-4">
            Medical IoT presents an attractive target due to its life-critical
            nature and the value of healthcare data. Threat actors are
            increasingly sophisticated, leveraging social engineering and
            zero-day exploits to gain access.
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>
              <strong>Cybercriminals:</strong> Sell patient data or extort
              hospitals
            </li>
            <li>
              <strong>State-Sponsored Groups:</strong> Target medical research
              and vaccine IP
            </li>
            <li>
              <strong>Hacktivists:</strong> Protest unethical practices via DoS
              or data dumps
            </li>
            <li>
              <strong>Script Kiddies:</strong> Exploit unpatched systems for
              notoriety
            </li>
          </ul>
        </section>

        <section>
          <MedicalIoTThreatActorsLab />
        </section>

        <section className="quiz mb-10">
          <Quiz questions={questions} />
        </section>

        <NextModuleCard
          title="Module 3: Network Security"
          description="Explore the network security landscape in Module 3 to understand how to secure medical IoT devices."
          link="/module3"
        />
      </div>
    </div>
  );
};

export default Module2;
