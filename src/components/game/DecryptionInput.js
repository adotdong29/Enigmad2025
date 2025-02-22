import React from 'react';
import { useGameState } from '../../hooks/useGameState';
import { levels } from '../../data/levels';
import Button from '../ui/Button';

const DecryptionInput = () => {
  const { state, dispatch } = useGameState();
  const level = levels[state.currentLevel] || levels[0];

  const handleInputChange = (index, value) => {
    const newAnswer = state.userAnswer.split('');
    newAnswer[index] = value.toUpperCase();
    dispatch({ type: 'SET_USER_ANSWER', answer: newAnswer.join('') });
  };

  const handleCheckAnswer = () => {
    if (state.userAnswer.toUpperCase() === level.correctMessage) {
      // Show success message and update score
      dispatch({ type: 'SHOW_SUCCESS' });
      dispatch({ type: 'ANSWER_CORRECT', score: 100 });
      
      setTimeout(() => {
        dispatch({ type: 'START_TRANSITION' });
        
        setTimeout(() => {
          if (state.currentLevel < levels.length - 1) {
            dispatch({ 
              type: 'NEXT_LEVEL',
              message: levels[state.currentLevel + 1].encryptedMessage
            });
          } else {
            dispatch({ type: 'GAME_COMPLETE' });
          }
          
          setTimeout(() => {
            dispatch({ type: 'END_TRANSITION' });
          }, 300);
        }, 500);
      }, 1500);
    } else {
      dispatch({ type: 'ANSWER_INCORRECT' });
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-center font-semibold mb-4 text-[#2C1810]">
        Enter Decrypted Message
      </h3>
      <div className="flex justify-center gap-2 mb-4">
        {level.correctMessage.split('').map((_, idx) => (
          <input
            key={idx}
            type="text"
            maxLength="1"
            className="message-box"
            value={state.userAnswer[idx] || ''}
            onChange={(e) => handleInputChange(idx, e.target.value)}
            disabled={!state.showSolution}
          />
        ))}
      </div>
      
      <div className="flex justify-center">
        <Button
          variant="success"
          onClick={handleCheckAnswer}
          disabled={!state.showSolution || state.userAnswer.length !== level.correctMessage.length}
        >
          Check Answer
        </Button>
      </div>
    </div>
  );
};

export default DecryptionInput;