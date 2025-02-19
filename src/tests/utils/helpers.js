import { validation } from '../../src/utils/validation';

describe('validation', () => {
  test('validates correct pattern', () => {
    const dots = new Set(['0-0', '1-1', '2-2']);
    const result = validation.checkPattern(dots, 0);
    expect(result).toBe(true);
  });

  test('validates correct answer', () => {
    const result = validation.checkAnswer('HELLOWORLD', 0);
    expect(result).toBe(true);
  });
});

// tests/utils/helpers.test.js
import { helpers } from '../../src/utils/helpers';

describe('helpers', () => {
  test('calculates score correctly', () => {
    const score = helpers.calculateScore(30000, 3); // 30 seconds, 3 dots
    expect(score).toBeGreaterThan(100); // Base score plus bonuses
  });

  test('formats time correctly', () => {
    const formatted = helpers.formatTime(65000); // 65 seconds
    expect(formatted).toBe('1:05');
  });
});