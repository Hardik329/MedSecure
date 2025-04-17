import React, { useState } from "react";

const logData = [
  { time: "08:00 AM", event: "Device Booted", severity: "info" },
  { time: "08:05 AM", event: "Heartbeat signal sent", severity: "info" },
  { time: "08:10 AM", event: "New firmware version available", severity: "warning" },
  { time: "08:12 AM", event: "User login failed (3 attempts)", severity: "warning" },
  { time: "08:13 AM", event: "Device memory usage exceeded 90%", severity: "critical" },
  { time: "08:15 AM", event: "Heartbeat signal sent", severity: "info" },
];

const severityColors = {
  info: "border-blue-400 text-blue-700 bg-blue-50",
  warning: "border-yellow-400 text-yellow-800 bg-yellow-50",
  critical: "border-red-400 text-red-700 bg-red-50",
};

const LogTimeline = () => {
  const [filter, setFilter] = useState("all");

  const filteredLogs =
    filter === "all" ? logData : logData.filter((log) => log.severity === filter);

  return (
    <div className="my-10">
      <h2 className="text-2xl font-semibold mb-4">📜 IoT Device Log Timeline</h2>

      <div className="flex gap-3 mb-6">
        {["all", "info", "warning", "critical"].map((sev) => (
          <button
            key={sev}
            onClick={() => setFilter(sev)}
            className={`px-4 py-1 rounded-full border text-sm font-medium ${
              filter === sev ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            {sev.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredLogs.map((log, index) => (
          <div
            key={index}
            className={`border-l-4 p-4 rounded shadow-sm ${severityColors[log.severity]}`}
          >
            <p className="font-semibold">{log.time}</p>
            <p>{log.event}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogTimeline;
