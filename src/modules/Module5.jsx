import React from "react";
import Quiz from "../components/Quiz";
import MedicalIoTShodanLab from "../components/MedicalIoTShodanLab";

const Module5 = () => {
  const questions = [
    {
      question: "What does OSINT stand for?",
      options: [
        "Operational Signal Internet Tracking",
        "Open Source Intelligence",
        "Online Secure Intrusion Network Test",
        "Offline Source Investigation Tool",
      ],
      correctIndex: 1,
    },
    {
      question: "Which search engine helps identify internet-connected devices and services?",
      options: ["Google", "Bing", "Shodan", "Yahoo"],
      correctIndex: 2,
    },
    {
      question: "Which of the following could be exposed using OSINT techniques?",
      options: [
        "Private Netflix passwords",
        "Medical imaging servers with DICOM access",
        "Encrypted patient chat messages",
        "Hospital cafeteria menus",
      ],
      correctIndex: 1,
    },
  ];
  

  return (
    <div>
      <div className="bg-[#1c2538] h-40 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">
          Module 5: OSINT & Shodan
        </h1>
      </div>
      <div className="max-w-5xl mx-auto px-6 py-10 text-gray-800">
        <section className="module-section mb-4">
          <h2>🎯 Learning Objectives</h2>
          <ul className="list-disc list-inside pl-4 space-y-2 mb-6">
            <li>Understand Open Source Intelligence (OSINT) and its applications.</li>
            <li>Use Shodan to identify exposed medical devices.</li>
            <li>Analyze banners and network metadata.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">What is OSINT?</h2>
          <p className="text-gray-700">
            OSINT, or Open Source Intelligence, is the practice of collecting information from publicly available sources — like websites, social media, search engines, and specialized tools — to assess risks or gather recon.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">🧰 Common OSINT Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Maltego", desc: "Visual link analysis & relationship mapping" },
              { name: "theHarvester", desc: "Email, domain & host reconnaissance" },
              { name: "Google Dorking", desc: "Crafted search queries for sensitive info" },
              { name: "Social Media Search", desc: "Profile tracking & timeline scraping" },
              { name: "Wayback Machine", desc: "View archived versions of websites" },
              { name: "SpiderFoot", desc: "Automated threat intelligence scanning" },
            ].map((tool, i) => (
              <div key={i} className="bg-white shadow-md p-4 rounded-lg border hover:shadow-lg transition duration-300">
                <h3 className="text-lg font-bold">{tool.name}</h3>
                <p className="text-gray-600 text-sm">{tool.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">🔍 What is Shodan?</h2>
          <p className="text-gray-700">
            Shodan is a search engine that indexes internet-connected devices — webcams, routers, industrial controls, smart TVs, and even medical devices. It reveals metadata like open ports, banners, and vulnerabilities.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">🖼️ Real Device Discovery Example</h2>
          <div className="bg-black text-green-400 font-mono text-sm p-4 rounded-lg overflow-x-auto border border-gray-700">
            {
              `IP: 103.25.21.91
              Port: 554
              Service: RTSP - Real Time Streaming Protocol
              Device: Hikvision IP Camera
              Location: Mumbai, India
              Vulnerabilities: CVE-2017-7921`
            }
          </div>
          <p className="mt-2 text-gray-600">
            This is a real device listed on Shodan — it’s publicly exposed and has a known vulnerability!
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">🎯 OSINT Challenge</h2>
          <p className="text-gray-700 mb-2">A suspicious IP address <code>159.65.210.76</code> was caught brute-forcing your hospital’s VPN. Use OSINT tools to uncover:</p>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>Geolocation</li>
            <li>Hosting Provider</li>
            <li>Any linked domains</li>
            <li>Whether it appears in breach databases</li>
          </ul>
          <details className="mt-3">
            <summary className="text-blue-600 underline cursor-pointer">💡 Show Hints</summary>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              <li>Use <code>whois</code> or <a href="https://ipinfo.io/" target="_blank" rel="noreferrer" className="underline text-blue-500">ipinfo.io</a></li>
              <li>Try <a href="https://www.shodan.io/" target="_blank" rel="noreferrer" className="underline text-blue-500">Shodan</a></li>
              <li>Check <a href="https://www.virustotal.com/" target="_blank" rel="noreferrer" className="underline text-blue-500">VirusTotal</a></li>
            </ul>
          </details>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">🧪 Lab: Shodan Device Recon</h2>
          <p className="text-gray-700 mb-2">
            Use our vulnerable lab setup with fake hospital devices exposed online. Your task:
          </p>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>Find exposed devices via Shodan or Censys</li>
            <li>Extract banner info & geolocation</li>
            <li>Document CVEs, if any</li>
          </ul>
          <div className="mt-3 bg-yellow-100 p-3 rounded-md">
            🧠 <strong>Tip:</strong> Combine Google Dorking with Shodan to track exposed patient record dashboards!
          </div>
        </section>

        <section className="mb-10">
          <MedicalIoTShodanLab />
        </section>

        <section className="quiz mb-10">
          <Quiz questions={questions} />
        </section>

        <div className="bg-green-100 p-4 border-l-4 border-green-500 rounded-md">
          <p>
            <strong>Next:</strong> Proceed to advanced testing and labs in Module 6.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Module5;
