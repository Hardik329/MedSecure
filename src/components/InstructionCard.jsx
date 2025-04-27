const InstructionCard = ({ step, instruction, command }) => {
    return (
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <h4 className="text-xl font-semibold text-gray-700">Step {step}: {instruction}</h4>
        <p className="text-sm text-gray-500 mt-2">Run this command:</p>
        <pre className="bg-gray-900 text-white p-2 rounded-md mt-2">{command}</pre>
      </div>
    );
  };
  
  export default InstructionCard;
  