import "../modules/Module1.css";

export default function LearningObjectives({ objectives }) {
  return (
    <section className="module-section mb-4">
      <h2>🎯 Learning Objectives</h2>
      <ul className="list-disc list-inside pl-5 space-y-2 text-[17px] mb-6 ">
        {objectives.map((objective, index) => (
          <li key={index} className="text-gray-700">
            {objective}
          </li>
        ))}
      </ul>
    </section>
  );
}
