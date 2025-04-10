import React from "react";

const styles = {
  info: "bg-blue-100 border-blue-500",
  success: "bg-green-100 border-green-500",
  error: "bg-red-100 border-red-500",
  warning: "bg-yellow-100 border-yellow-500",
};

const HighlightBox = ({ type = "info", title, children }) => (
  <div className={`p-4 border-l-4 rounded-md ${styles[type]}`}>
    {title && <p className="font-semibold">{title}</p>}
    {children}
  </div>
);

export default HighlightBox;
