import React from "react";

export const ProgressBar = ({ value = 50, max = 100 }) => {
  const percentage = (value / max) * 100;

  return (
    <div className="w-full h-full mb-1.5 overflow-hidden bg-gray-300 rounded-full">
      <div
        className="h-full transition-all duration-300 bg-blue-500 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};
