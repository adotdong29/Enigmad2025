import React from 'react';
import { useGameState } from '../../hooks/useGameState';
import { levels } from '../../data/levels';

const MessageDisplay = () => {
  const { state } = useGameState();
  const level = levels[state.currentLevel] || levels[0];

  if (!level) return null;

  return (
    <div className="mb-8">
      <div className="text-center mb-4">
        <h2 className="text-xl font-semibold mb-2">Encrypted Message</h2>
        <div className="flex justify-center gap-2">
          {level.encryptedMessage.split('').map((char, idx) => (
            <div key={idx} className="message-box bg-white">
              {char}
            </div>
          ))}
        </div>
      </div>

      {state.showSolution && state.decryptionKey && (
        <div className="mt-4 p-4 bg-green-100 rounded-lg">
          <p className="text-center text-green-800 font-medium">
            Decryption Key: {state.decryptionKey}
          </p>
        </div>
      )}
    </div>
  );
};

export default MessageDisplay;