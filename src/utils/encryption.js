export const encryption = {
  encrypt: (text, shift) => {
    return text.split('').map(char => {
      if (char.match(/[A-Z]/)) {
        const code = char.charCodeAt(0);
        return String.fromCharCode(((code - 65 + shift) % 26) + 65);
      }
      return char;
    }).join('');
  },
  
  decrypt: (text, shift) => {
    return text.split('').map(char => {
      if (char.match(/[A-Z]/)) {
        const code = char.charCodeAt(0);
        return String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
      }
      return char;
    }).join('');
  }
};