const caesar = function (input, shift) {
  return input
    .split('')
    .map((letter) => {
      const codepoint = letter.charCodeAt();
      if (codepoint >= 65 && codepoint <= 90) {
        return String.fromCharCode(((codepoint + (shift % 26) + 26 - 65) % 26) + 65);
      }
      if (codepoint >= 97 && codepoint <= 122) {
        return String.fromCharCode(((codepoint + (shift % 26) + 26 - 97) % 26) + 97);
      }
      return letter;
    })
    .reduce((acc, val) => acc + val, '');
};

module.exports = caesar;
