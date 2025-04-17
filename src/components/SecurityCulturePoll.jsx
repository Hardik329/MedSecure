import React, { useState } from 'react';

const SecurityCulturePoll = () => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleVote = (answer) => {
    setSelectedAnswer(answer);
  };

  const submitVote = () => {
    setSubmitted(true);
  };

  return (
    <div className="poll-container p-6 bg-gray-200 rounded-md shadow-lg">
      <h2 className="text-xl font-semibold mb-4">How do you rate the security culture in your organization?</h2>
      {!submitted ? (
        <div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              name="securityCulture"
              value="Strong"
              onChange={() => handleVote('Strong')}
              checked={selectedAnswer === 'Strong'}
              className="mr-2"
            />
            <label>Strong - Security is prioritized by everyone</label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              name="securityCulture"
              value="Moderate"
              onChange={() => handleVote('Moderate')}
              checked={selectedAnswer === 'Moderate'}
              className="mr-2"
            />
            <label>Moderate - Some security practices are followed</label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              name="securityCulture"
              value="Weak"
              onChange={() => handleVote('Weak')}
              checked={selectedAnswer === 'Weak'}
              className="mr-2"
            />
            <label>Weak - Security is not well implemented</label>
          </div>
          <button
            onClick={submitVote}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h3 className="text-lg font-medium">Thank you for your feedback!</h3>
          <p>Your selected response: <strong>{selectedAnswer}</strong></p>
        </div>
      )}
    </div>
  );
};

export default SecurityCulturePoll;
