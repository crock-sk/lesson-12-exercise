// sum – 2 parameters: a and b. return value should be the sum of both

// subtract - 2 parameters: a and b. return value is a subtracted by b

// multiply - 2 parameters: a and b. return value is a multiplied by b

// divide - 2 parameters: a and b. return value is a divided by b

// calculate – 3 parameters: a, b and action.

// Action should be “sum”, “subtract”,”multiply” or “divide”, according to
// the action parameter call the relevant function with a and b

// Add an array of objects with keys a, b and calculate, and iterate over
// it calculating each item in the array using ”calculate” function and
// print the result

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return b * a;
}

function divide(a, b) {
  return a / b;
}

function calculate(a, b, action) {
  return action(a, b);
}

const array = [
  {
    a: 18,
    b: 3,
    calculate: sum,
  },
  {
    a: 18,
    b: 3,
    calculate: subtract,
  },
  {
    a: 18,
    b: 3,
    calculate: multiply,
  },
  {
    a: 18,
    b: 3,
    calculate: divide,
  },
];

for (const obj of array) {
  console.log(calculate(obj.a, obj.b, obj.calculate));
}
