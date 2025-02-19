import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import App from '../../src/App';

describe('Gameplay Integration', () => {
  test('complete game flow', async () => {
    render(<App />);

    // 1. Select dots
    const dots = screen.getAllByRole('button').slice(0, 35);
    fireEvent.click(dots[0]);
    fireEvent.click(dots[8]);
    fireEvent.click(dots[16]);

    // 2. Run Bombe
    const runButton = screen.getByText('Run Bombe');
    fireEvent.click(runButton);

    // 3. Wait for decryption key
    await waitFor(() => {
      expect(screen.getByTestId('decryption-key')).toBeInTheDocument();
    });

    // 4. Enter solution
    const inputs = screen.getAllByRole('textbox');
    'HELLOWORLD'.split('').forEach((letter, index) => {
      fireEvent.change(inputs[index], { target: { value: letter } });
    });

    // 5. Check answer
    const checkButton = screen.getByText('Check Answer');
    fireEvent.click(checkButton);

    // 6. Verify level completion
    await waitFor(() => {
      expect(screen.getByText(/Level Complete/)).toBeInTheDocument();
    });
  });

  test('handles incorrect patterns', async () => {
    render(<App />);

    // Select wrong pattern
    const dots = screen.getAllByRole('button').slice(0, 35);
    fireEvent.click(dots[1]);
    fireEvent.click(dots[2]);

    const runButton = screen.getByText('Run Bombe');
    fireEvent.click(runButton);

    await waitFor(() => {
      expect(screen.getByText(/Pattern doesn't seem right/)).toBeInTheDocument();
    });
  });
});
