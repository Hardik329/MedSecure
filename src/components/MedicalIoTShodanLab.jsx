import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function MedicalIoTShodanLab() {
  const [submission, setSubmission] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!submission.trim()) return;

    setLoading(true);

    try {
      await addDoc(collection(db, "medicalIoTShodanSubmissions"), {
        response: submission,
        createdAt: serverTimestamp(),
      });

      setSubmitted(true);
      setSubmission("");
    } catch (error) {
      console.error("Error submitting to Firestore:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center">🩺 Shodan Lab: Medical IoT Device Search</h1>

      {/* Instructions */}
      <div className="bg-gray-100 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>Visit <a href="https://www.shodan.io/" target="_blank" className="text-blue-600 underline">Shodan.io</a>.</li>
          <li>Perform the search tasks focused on <strong>Medical IoT Devices</strong>.</li>
          <li><strong>Passive reconnaissance only</strong> — never interact with the devices.</li>
          <li>Document your findings in the submission box below.</li>
        </ul>
      </div>

      {/* Medical IoT Search Challenges */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">🔍 Search Tasks (Medical IoT)</h2>
        <ol className="list-decimal pl-6 space-y-2 text-lg">
          <li>Find an open-access <strong>PACS server</strong> (Medical Imaging System).</li>
          <li>Locate an unsecured <strong>Infusion Pump</strong> interface.</li>
          <li>Identify a hospital device exposing <strong>HL7 Protocol</strong> (healthcare data sharing standard).</li>
          <li>Search for an exposed <strong>medical device web dashboard</strong> (hint: "Heart Monitor" or "Vital Signs Monitor").</li>
          <li>Look for devices with vendor banners like <strong>GE Healthcare</strong>, <strong>Philips</strong>, or <strong>Siemens Healthineers</strong>.</li>
        </ol>
      </div>

      {/* Ethical Notice */}
      <div className="bg-yellow-100 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">⚠️ Ethical Notice</h2>
        <p className="text-lg">
          This activity is strictly for cybersecurity awareness and research.  
          Never attempt unauthorized access, data modification, or disruption of Medical IoT devices.
        </p>
      </div>

      {/* Submission Box */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-md space-y-4">
        <h2 className="text-2xl font-semibold mb-2">📝 Submit Your Observations</h2>

        {!submitted ? (
          <>
            <textarea
              value={submission}
              onChange={(e) => setSubmission(e.target.value)}
              placeholder="Briefly describe the Medical IoT devices or banners you found on Shodan..."
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
            ✅ Submission received! Thank you for participating.
          </div>
        )}
      </div>
    </div>
  );
}
