import React from 'react';
import { useGameState } from '../../hooks/useGameState';
import ProgressBar from '../ui/ProgressBar';
import { levels } from '../../data/levels'; // Import levels

const Header = () => {
  const { state } = useGameState();
  const totalLevels = levels.length;

  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Enigmad</h1>
      <p className="text-gray-600 mb-4">
        Level {state.currentLevel + 1} of {totalLevels}
      </p>
      
      <div className="max-w-md mx-auto">
        <ProgressBar
          progress={state.currentLevel + 1}
          total={totalLevels}
          label="Progress"
          color="green"
        />
      </div>

      <div className="mt-4 text-lg font-semibold text-gray-700">
        Score: {state.score}
      </div>
    </div>
  );
};

export default Header;