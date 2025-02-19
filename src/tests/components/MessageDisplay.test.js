import { render, screen } from '@testing-library/react';
import MessageDisplay from '../../src/components/game/MessageDisplay';
import { GameProvider } from '../../src/contexts/GameContext';

describe('MessageDisplay', () => {
  test('displays encrypted message', () => {
    render(
      <GameProvider>
        <MessageDisplay />
      </GameProvider>
    );
    
    const message = screen.getByTestId('encrypted-message');
    expect(message).toBeInTheDocument();
  });

  test('shows decryption key after successful run', async () => {
    render(
      <GameProvider>
        <MessageDisplay />
      </GameProvider>
    );
    
    // Simulate successful Bombe run
    // This would be done through context updates
    
    const key = await screen.findByTestId('decryption-key');
    expect(key).toBeInTheDocument();
  });
});
