const palindromes = function (s) {
  // remove whitespace and punctuation
  const trimmed = s.split(/\s|,|\./).reduce((acc, val) => acc + val, '');
  // reverse the string
  const reversed = trimmed
    .split('')
    .reverse()
    .reduce((acc, val) => acc + val, '');
  return trimmed === reversed;
};

module.exports = palindromes;
