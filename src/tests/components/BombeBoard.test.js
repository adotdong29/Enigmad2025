import { render, fireEvent, screen } from '@testing-library/react';
import BombeBoard from '../../src/components/game/BombeBoard';
import { GameProvider } from '../../src/contexts/GameContext';

describe('BombeBoard', () => {
  beforeEach(() => {
    render(
      <GameProvider>
        <BombeBoard />
      </GameProvider>
    );
  });

  test('renders correct number of dots', () => {
    const dots = screen.getAllByRole('button');
    expect(dots).toHaveLength(35); // 5x7 grid
  });

  test('toggles dot selection on click', () => {
    const dot = screen.getAllByRole('button')[0];
    fireEvent.click(dot);
    expect(dot).toHaveClass('bombe-dot-selected');
    fireEvent.click(dot);
    expect(dot).not.toHaveClass('bombe-dot-selected');
  });

  test('run button becomes enabled when dots are selected', () => {
    const runButton = screen.getByText('Run Bombe');
    expect(runButton).toBeDisabled();
    
    const dot = screen.getAllByRole('button')[0];
    fireEvent.click(dot);
    expect(runButton).not.toBeDisabled();
  });
});