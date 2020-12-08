const fibonacci = function (n) {
  function fibonacci_(a, b, x) {
    switch (x) {
      case 1:
        return b;
      default:
        return fibonacci_(b, a + b, x - 1);
    }
  }

  return fibonacci_(0, 1, n);
};

module.exports = fibonacci;
