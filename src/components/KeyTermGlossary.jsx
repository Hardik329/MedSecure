import React from "react";

const KeyTermGlossary = ({ terms }) => {
  return (
    <div className="my-6 p-4 bg-white border-l-4 border-blue-600 shadow rounded-lg">
      <h3 className="text-xl font-bold mb-4">Key Terms Glossary</h3>
      <ul className="space-y-3">
        {terms.map((term, idx) => (
          <li key={idx}>
            <strong className="text-blue-700">{term.term}:</strong> <span>{term.definition}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeyTermGlossary;