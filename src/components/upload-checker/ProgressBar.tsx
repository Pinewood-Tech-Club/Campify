import React from "react";

interface ProgressBarProps {
  currentValue: number;
  maxValue: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentValue,
  maxValue,
}) => {
  const percentage = (currentValue / maxValue) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
      <div
        className="bg-blue-500 h-full flex items-center justify-center text-xs text-white font-bold"
        style={{ width: `${percentage}%` }}
      >
        <span>{`${currentValue} / ${maxValue}`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
