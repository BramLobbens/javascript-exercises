const caesar = function (input, shift) {
  return Array.from(input)
    .map((letter) => String.fromCharCode(letter.charCodeAt() + shift))
    .reduce((acc, val) => acc + val, '');
};

module.exports = caesar;
