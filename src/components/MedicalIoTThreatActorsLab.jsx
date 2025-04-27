import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function MedicalIoTThreatActorsLab() {
  const [submission, setSubmission] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!submission.trim()) return;
    setLoading(true);

    try {
      await addDoc(collection(db, "medicalIoTThreatActorsSubmissions"), {
        response: submission,
        createdAt: serverTimestamp(),
      });

      setSubmitted(true);
      setSubmission("");
    } catch (error) {
      console.error("Error submitting threat actor lab:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-blue-700">🛡️ Threat Landscape Hands-on Lab</h1>
      <p className="text-lg text-gray-700">
        In this lab, you'll research real-world cyber threats that could impact medical IoT devices. 
        Explore threat intelligence platforms and document one threat actor or malware relevant to healthcare or medical IoT.
      </p>

      <div className="bg-blue-50 p-6 rounded-xl space-y-4">
        <h2 className="text-2xl font-semibold text-blue-800">🔍 Instructions:</h2>
        <ul className="list-disc ml-6 text-gray-800 space-y-2">
          <li>Visit resources like <a className="text-blue-600 underline" href="https://attack.mitre.org/" target="_blank">MITRE ATT&CK</a> or <a className="text-blue-600 underline" href="https://www.cisa.gov/known-exploited-vulnerabilities-catalog" target="_blank">CISA KEV</a>.</li>
          <li>Search for threat actors, malware, or campaigns targeting healthcare or medical IoT devices.</li>
          <li>Pick one threat and describe:
            <ul className="list-disc ml-6">
              <li>Name of the threat actor or malware</li>
              <li>How it operates</li>
              <li>Impact on medical IoT devices</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl shadow-md space-y-4">
        <h2 className="text-2xl font-semibold mb-2">📝 Submit Your Findings</h2>

        {!submitted ? (
          <>
            <textarea
              value={submission}
              onChange={(e) => setSubmission(e.target.value)}
              placeholder="Example: Threat Actor 'FIN12' targets healthcare with ransomware, affecting critical medical IoT operations..."
              className="w-full p-4 border border-gray-300 rounded-lg min-h-[150px] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleSubmit}
              className={`px-6 py-2 rounded-lg transition text-white ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"}`}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </>
        ) : (
          <div className="text-green-600 text-xl font-semibold">
            ✅ Submission received! Great job mapping the threat landscape!
          </div>
        )}
      </div>
    </div>
  );
}
