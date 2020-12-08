function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function sum(array) {
  return array.reduce((acc, val) => acc + val, 0);
}

function multiply(x, y) {
  return x * y;
}

function power(n, k) {
  return n ** k;
}

function factorial(n) {
  switch (n) {
    case 0:
      return 1;
    default:
      return n * factorial(n - 1);
  }
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
