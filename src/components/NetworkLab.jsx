import React from "react";
import TerminalComponent from "../components/Terminal";

//JBEUKrjbWqg?si=NEX6GtEkDfSBETnD

const NetworkLab = () => {
  const [showTerminal, setShowTerminal] = React.useState(false);

  return (
    <section className="mt-10 bg-gray-100 p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">🧪 Network Security Lab with Docker</h2>
      <p className="mb-4">
        This lab helps you understand common network security weaknesses by running a simulated vulnerable HTTP server inside a Docker container.
      </p>

      <div className="mb-4">
        <p><strong>Objective:</strong> Observe unencrypted data transmission and apply basic hardening using Docker.</p>
      </div>

      <div className="mb-4">
        <p><strong>Docker Lab Setup:</strong></p>
        <ol className="list-decimal list-inside space-y-1">
          <li>
            Pull and run a basic vulnerable HTTP server:
            <pre className="bg-black text-green-400 p-3 rounded-md mt-2">
{`docker run -d -p 8080:80 --name insecure-web httpd:2.4-alpine`}
            </pre>
          </li>
          <li>
            Open your browser and visit: <code>http://localhost:8080</code>. The site is served over HTTP (not encrypted).
          </li>
          <li>
            Now simulate an attacker capturing traffic (this would be done with a tool like Wireshark, outside Docker).
          </li>
          <li>
            Apply hardening by stopping the container and switching to an HTTPS-based container, or configuring reverse proxy like Nginx with SSL.
          </li>
          <li>
            Remove the insecure container:
            <pre className="bg-black text-green-400 p-3 rounded-md mt-2">
{`docker stop insecure-web && docker rm insecure-web`}
            </pre>
          </li>
        </ol>
      </div>

      <div className="text-sm text-gray-600 mb-6">
        Tip: You can extend this lab by running a second container as an attacker to perform a packet sniffing demo.
      </div>
      <div className="mt-6">
        <a
          href="https://www.youtube.com/watch?v=JBEUKrjbWqg" // Replace with your actual YouTube link
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Watch this tutorial to install Docker and run the lab.
        </a>
      </div>


      <hr className="my-6" />

      <h3 className="text-xl font-semibold text-gray-700 mb-2">
        🧪 Interactive Terminal
      </h3>
      <p className="mb-4">
        Use the terminal below to run the Docker commands directly if you have Docker installed.
        Try the steps above and observe the behavior of unencrypted vs. secured services.
      </p>

      <button
        onClick={() => setShowTerminal((prev) => !prev)}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
      >
        {showTerminal ? "Stop Terminal" : "Start Terminal"}
      </button>

      {showTerminal && (
        <div className="mt-4 p-4">
          <TerminalComponent />
        </div>
      )}
    </section>
  );
};

export default NetworkLab;
