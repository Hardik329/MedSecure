import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp, getDocs, query, orderBy } from "firebase/firestore";

export default function MedicalIoTShodanLab() {
  const [submission, setSubmission] = useState("");
  const [submissions, setSubmissions] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!submission.trim()) return;
    setLoading(true);

    try {
      await addDoc(collection(db, "medicalIoTOsintSubmissions"), {
        response: submission,
        createdAt: serverTimestamp(),
      });

      setSubmitted(true);
      setSubmission("");
      fetchSubmissions(); // Refresh after submit
    } catch (error) {
      console.error("Error submitting OSINT lab:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSubmissions = async () => {
    try {
      const q = query(collection(db, "medicalIoTOsintSubmissions"), orderBy("createdAt", "asc"));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc, idx) => ({
        id: doc.id,
        ...doc.data(),
        rank: idx + 1,
      }));
      setSubmissions(data);
    } catch (error) {
      console.error("Error fetching submissions:", error);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-indigo-700">🔎 OSINT & Shodan Hands-on Lab</h1>
      <p className="text-lg text-gray-700">
        Investigate exposed medical IoT devices and submit your findings based on OSINT research.
      </p>

      {/* Submission Box */}
      <div className="bg-indigo-50 p-6 rounded-xl space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-800">📝 Submit Your OSINT Findings</h2>

        {!submitted ? (
          <>
            <textarea
              value={submission}
              onChange={(e) => setSubmission(e.target.value)}
              placeholder="Example: Found exposed insulin pump interface with no authentication on Shodan..."
              className="w-full p-4 border border-gray-300 rounded-lg min-h-[150px] focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              onClick={handleSubmit}
              className={`px-6 py-2 rounded-lg transition text-white ${loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"}`}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </>
        ) : (
          <div className="text-green-600 text-xl font-semibold">
            ✅ Submission received! Awesome work!
          </div>
        )}
      </div>

      {/* Leaderboard */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-md space-y-4 mt-12">
        <h2 className="text-3xl font-bold text-indigo-700 text-center mb-4">🏆 OSINT Leaderboard</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-indigo-100 text-indigo-700">
                <th className="p-4 border">Rank</th>
                <th className="p-4 border">Submission</th>
                <th className="p-4 border">Submitted At</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((item) => (
                <tr key={item.id} className="hover:bg-indigo-50">
                  <td className="p-4 border text-center font-semibold">{item.rank}</td>
                  <td className="p-4 border">{item.response}</td>
                  <td className="p-4 border text-sm text-gray-600">{item.createdAt?.toDate?.().toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
