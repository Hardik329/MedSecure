import React, { useState } from "react";

const InteractiveChecklist = ({ title, items }) => {
  const [checkedItems, setCheckedItems] = useState(
    Array(items.length).fill(false)
  );

  const toggleItem = (index) => {
    const newItems = [...checkedItems];
    newItems[index] = !newItems[index];
    setCheckedItems(newItems);
  };

  return (
    <div className="my-6 p-4 bg-gray-100 rounded-xl shadow">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <input
              type="checkbox"
              checked={checkedItems[index]}
              onChange={() => toggleItem(index)}
              className="mr-3 h-5 w-5 text-blue-600"
            />
            <span className={checkedItems[index] ? "line-through text-gray-500" : ""}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InteractiveChecklist;