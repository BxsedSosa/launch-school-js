// This will be where all the input validation will happen
function checkNumbers(number) {
  number = parseInt(number);

  if (number === NaN || !Number.isInteger(number)) {
    return true;
  }
  return false;
}

function checkOpertaion(operation) {
  const CORRECTOPS = [
    ["1", "+", "add", "addition"],
    ["2", "-", "sub", "subtraction"],
    ["3", "*", "mul", "multiply"],
    ["4", "/", "div", "divide"],
  ];

  for (const arr of CORRECTOPS) {
    for (const op of arr) {
      if (operation === op) {
        return false;
      }
    }
  }
  return true;
}

function checkDivisionWithZero(numbers, operation) {
  for (const number of numbers) {
    if (number === 0 && operation === "/") {
      return true;
    }
  }
  return false;
}

function checkRetry(string) {
  const VALIDRETRY = [
    ["1", "yes", "y"],
    ["2", "no", "n"],
  ];
}

module.exports = { checkNumbers, checkOpertaion, checkDivisionWithZero };
