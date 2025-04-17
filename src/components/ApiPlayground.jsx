import React, { useState } from 'react';

export function ApiPlayground({ baseUrl, endpoints }) {
  const [response, setResponse] = useState(null);
  const [selectedEndpoint, setSelectedEndpoint] = useState(endpoints[0]);

  const simulateRequest = () => {
    setResponse(`Simulated ${selectedEndpoint.method} request to ${baseUrl}${selectedEndpoint.path}\nStatus: 200 OK\n{ "message": "Sample data returned." }`);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-xl shadow-md mb-6">
      <h3 className="text-xl font-semibold mb-2">API Playground</h3>
      <select
        className="p-2 border rounded w-full mb-3"
        onChange={e => setSelectedEndpoint(endpoints[e.target.value])}
      >
        {endpoints.map((ep, idx) => (
          <option key={idx} value={idx}>{ep.method} {ep.path} - {ep.description}</option>
        ))}
      </select>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={simulateRequest}
      >
        Simulate API Request
      </button>
      {response && (
        <pre className="bg-black text-green-400 mt-4 p-3 rounded overflow-auto text-sm">
          {response}
        </pre>
      )}
    </div>
  );
}
