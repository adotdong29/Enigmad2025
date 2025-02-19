import React from 'react';

const ProgressBar = ({ 
  progress, 
  total, 
  label,
  showPercentage = true,
  color = 'blue' 
}) => {
  const percentage = Math.round((progress / total) * 100);
  
  const colors = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    purple: 'bg-purple-600'
  };

  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-700">{label}</span>
        {showPercentage && (
          <span className="text-sm text-gray-700">{percentage}%</span>
        )}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <div
          className={`h-2.5 rounded-full transition-all duration-300 ${colors[color]}`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    </div>
  );
};

export default ProgressBar;