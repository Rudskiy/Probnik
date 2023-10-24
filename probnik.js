// Задача 1
const getSum = (a, b) => a + b;
console.log(getSum(2, 12));

// Задача 2
function getSmallestNumber(a, b) {
  return a < b ? a : b;
}
console.log(getSmallestNumber(2, 12));

// Задача 3
function castBoolean() {

}

// Задача 4
function capitalize(a, b) {
  if (b > console.count(a)) {
    return a;
  } else {
    return capitalize(toUpperCase(a[b]));
  }
}
console.log(capitalize('Hexlet', 2));

// Задача 5
function countCapitalLetters() {

}

export {
  getSum,
  getSmallestNumber,
  castBoolean,
  capitalize,
  countCapitalLetters,
}
