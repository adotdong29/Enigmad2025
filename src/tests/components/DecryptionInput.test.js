import { render, fireEvent, screen } from '@testing-library/react';
import DecryptionInput from '../../src/components/game/DecryptionInput';
import { GameProvider } from '../../src/contexts/GameContext';

describe('DecryptionInput', () => {
  test('input boxes match message length', () => {
    render(
      <GameProvider>
        <DecryptionInput />
      </GameProvider>
    );
    
    const inputs = screen.getAllByRole('textbox');
    expect(inputs).toHaveLength(10); // Based on test message "HELLOWORLD"
  });

  test('handles user input correctly', () => {
    render(
      <GameProvider>
        <DecryptionInput />
      </GameProvider>
    );
    
    const inputs = screen.getAllByRole('textbox');
    fireEvent.change(inputs[0], { target: { value: 'H' } });
    expect(inputs[0].value).toBe('H');
  });
});
