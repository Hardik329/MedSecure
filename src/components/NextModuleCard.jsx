import React from "react";

const NextModuleCard = ({ nextModule, description }) => (
  <div className="bg-green-100 p-4 border-l-4 border-green-500 rounded-md">
    <p>
      <strong>Next:</strong> {description}
    </p>
  </div>
);

export default NextModuleCard;
