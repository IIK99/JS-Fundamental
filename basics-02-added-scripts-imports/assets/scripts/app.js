const defaultResult = 0;
let currentResult = defaultResult;

function subtract(num1, num2) {
  const result = num1 - num2;
  alert("The result is" + result);
}

subtract(20, 7);

function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

currentResult = add(1, 2);

// currentResult = ((currentResult + 10) * 3) / 2 - 1;

let calculationDescription = `(${currentResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);
