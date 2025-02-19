import { render, act } from '@testing-library/react';
import { useGameState } from '../../src/hooks/useGameState';
import { GameProvider } from '../../src/contexts/GameContext';

describe('Game Context Integration', () => {
  const TestComponent = () => {
    const gameState = useGameState();
    return <div data-testid="game-state">{JSON.stringify(gameState)}</div>;
  };

  test('provides initial game state', () => {
    const { getByTestId } = render(
      <GameProvider>
        <TestComponent />
      </GameProvider>
    );
    
    const state = JSON.parse(getByTestId('game-state').textContent);
    expect(state.currentLevel).toBe(0);
    expect(state.score).toBe(0);
  });

  test('updates game state correctly', () => {
    const { getByTestId } = render(
      <GameProvider>
        <TestComponent />
      </GameProvider>
    );

    act(() => {
      // Simulate game actions
    });

    const state = JSON.parse(getByTestId('game-state').textContent);
    expect(state.score).toBeGreaterThan(0);
  });
});