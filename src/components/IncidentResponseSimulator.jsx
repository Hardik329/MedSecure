import React, { useState } from 'react';

const IncidentResponseSimulator = () => {
  const [step, setStep] = useState(1);
  const [outcome, setOutcome] = useState(null);

  const handleAction = (action) => {
    if (step === 1) {
      if (action === 'Report') {
        setStep(2);
      } else {
        setOutcome('Incorrect action, the breach worsens!');
      }
    } else if (step === 2) {
      if (action === 'Contain') {
        setStep(3);
      } else {
        setOutcome('The breach spreads, data is lost.');
      }
    } else if (step === 3) {
      if (action === 'Mitigate') {
        setOutcome('You handled the incident well. The system is secured.');
      } else {
        setOutcome('You failed to properly mitigate, and further breaches occurred.');
      }
    }
  };

  return (
    <div className="incident-simulator p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Incident Response Simulation</h2>
      <p className="mb-4">
        Imagine a scenario where a data breach has occurred in your organization. How would you handle it?
      </p>
      {!outcome ? (
        <>
          {step === 1 && (
            <div>
              <p className="mb-4">Step 1: The data breach has been discovered. What is your first action?</p>
              <button onClick={() => handleAction('Report')} className="btn btn-primary">Report the breach</button>
              <button onClick={() => handleAction('Ignore')} className="btn btn-secondary">Ignore the breach</button>
            </div>
          )}
          {step === 2 && (
            <div>
              <p className="mb-4">Step 2: The breach has been reported. What do you do next?</p>
              <button onClick={() => handleAction('Contain')} className="btn btn-primary">Contain the breach</button>
              <button onClick={() => handleAction('Do nothing')} className="btn btn-secondary">Do nothing</button>
            </div>
          )}
          {step === 3 && (
            <div>
              <p className="mb-4">Step 3: The breach is contained. What should be your next action?</p>
              <button onClick={() => handleAction('Mitigate')} className="btn btn-primary">Mitigate the damage</button>
              <button onClick={() => handleAction('Delay')} className="btn btn-secondary">Delay the mitigation</button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center">
          <h3 className="text-lg font-medium">Outcome:</h3>
          <p>{outcome}</p>
        </div>
      )}
    </div>
  );
};

export default IncidentResponseSimulator;
