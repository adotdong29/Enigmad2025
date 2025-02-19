import React from 'react';
import { useGameState } from '../../hooks/useGameState';
import { gameConfig } from '../../constants/gameConfig';
import Button from '../ui/Button';

const BombeBoard = () => {
  const { state, dispatch } = useGameState();
  const { rows, cols } = gameConfig.gridSize;

  const handleDotClick = (row, col) => {
    if (!state.isRunning) {
      dispatch({ type: 'TOGGLE_DOT', row, col });
    }
  };

  const handleRunBombe = () => {
    dispatch({ type: 'START_BOMBE' });
    
    // Simulate Bombe machine running
    setTimeout(() => {
      dispatch({ 
        type: 'FINISH_BOMBE',
        key: 'right shift 3' // This would normally come from the level data
      });
    }, gameConfig.animation.bombeRunDuration);
  };

  return (
    <div className="bg-gray-300 p-6 rounded-lg shadow-md">
      <div className="grid gap-4"
        style={{ 
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`
        }}>
        {Array.from({ length: rows * cols }, (_, i) => {
          const row = Math.floor(i / cols);
          const col = i % cols;
          const dotId = `${row}-${col}`;
          
          return (
            <button
              key={dotId}
              className={`bombe-dot ${
                state.selectedDots.has(dotId) ? 'bombe-dot-selected' : 'bg-white'
              }`}
              onClick={() => handleDotClick(row, col)}
              disabled={state.isRunning}
            />
          );
        })}
      </div>
      
      <div className="mt-6 flex justify-center">
        <Button
          variant="primary"
          size="large"
          onClick={handleRunBombe}
          disabled={state.isRunning || state.selectedDots.size === 0}
        >
          {state.isRunning ? 'Running Bombe...' : 'Run Bombe'}
        </Button>
      </div>
    </div>
  );
};

export default BombeBoard;  // Added export statement