import { encryption } from '../../src/utils/encryption';

describe('encryption', () => {
  test('encrypts message correctly', () => {
    const result = encryption.encrypt('HELLO', 3);
    expect(result).toBe('KHOOR');
  });

  test('decrypts message correctly', () => {
    const result = encryption.decrypt('KHOOR', 3);
    expect(result).toBe('HELLO');
  });
});