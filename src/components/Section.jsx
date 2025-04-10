import React from "react";

const Section = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-semibold text-gray-700 mb-4">{title}</h2>
    {children}
  </section>
);

export default Section;
