import React, { useState } from 'react';
import { Info } from 'lucide-react';
import { useGameState } from '../../hooks/useGameState';
import { levels } from '../../data/levels';

const Instructions = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { state } = useGameState();
  const level = levels[state.currentLevel] || levels[0];

  if (!level) return null;

  return (
    <div className="mb-8">
      {isVisible ? (
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-blue-900">
              Level {state.currentLevel + 1} Instructions
            </h3>
            <button 
              className="text-blue-600 hover:text-blue-800"
              onClick={() => setIsVisible(false)}
            >
              ×
            </button>
          </div>
          
          <div className="text-blue-800 space-y-4">
            <p>{level.hint}</p>
            <div>
              <p className="font-semibold mb-2">Required Pattern:</p>
              <p>Click these dots on the board:</p>
              <ul className="list-disc list-inside">
                {level.requiredDots.map((dot, index) => {
                  const [row, col] = dot.split('-');
                  return (
                    <li key={index}>
                      Position: Row {parseInt(row) + 1}, Column {parseInt(col) + 1}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <button 
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
          onClick={() => setIsVisible(true)}
        >
          <Info size={20} />
          Show Instructions
        </button>
      )}
    </div>
  );
};

export default Instructions;