import React, { useState } from "react";

const Quiz = ({ questions }) => {
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length).fill(null)
  );

  const handleOptionSelect = (qIndex, optionIndex) => {
    if (!selectedAnswers[qIndex]) {
      const updated = [...selectedAnswers];
      updated[qIndex] = optionIndex;
      setSelectedAnswers((prev) => {
        if (prev[qIndex] !== null) {
          return prev;
        }

        return updated;
      });
    }
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-semibold text-gray-800">
        🧠 Quiz: Test Your Knowledge
      </h2>

      {questions.map((q, qIndex) => {
        const isAnswered = selectedAnswers[qIndex] !== null;
        return (
          <div
            key={qIndex}
            className="bg-white p-6 rounded-lg shadow border border-gray-200"
          >
            <p className="font-semibold text-lg mb-4">
              {qIndex + 1}. {q.question}
            </p>

            <div className="space-y-2 px-4">
              {q.options.map((option, oIndex) => {
                const isSelected = selectedAnswers[qIndex] === oIndex;
                const isCorrect = q.correctIndex === oIndex;
                //   const isSubmitted = submitted;

                let optionClasses = "p-3 border rounded cursor-pointer";
                if (isAnswered) {
                  if (isCorrect) {
                    optionClasses +=
                      " bg-green-100 border-green-500 text-green-700";
                  } else if (isSelected) {
                    optionClasses += " bg-red-100 border-red-500 text-red-700";
                  } else {
                    optionClasses += " bg-gray-100";
                  }
                } else if (isSelected) {
                  optionClasses += " border-blue-500 bg-blue-50";
                }

                return (
                  <div
                    key={oIndex}
                    onClick={() => handleOptionSelect(qIndex, oIndex)}
                    className={optionClasses}
                  >
                    <input
                      type="radio"
                      name={`q-${qIndex}`}
                      checked={isSelected}
                      onChange={() => handleOptionSelect(qIndex, oIndex)}
                      className="mr-2"
                    />
                    {option}
                  </div>
                );
              })}
            </div>

            {isAnswered && (
              <p className="mt-4 font-medium">
                {selectedAnswers[qIndex] === q.correctIndex
                  ? "✅ Correct!"
                  : `❌ Incorrect. Correct answer: "${
                      q.options[q.correctIndex]
                    }"`}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Quiz;
