const rlSync = require("readline-sync");
const notValid = require("./validation");
const MSG = require("./text.json");

main();

function main() {
  console.clear();
  let language = "en";
  let numbers = askUserNumbers(language);
  let operation = askUserOperation(language, numbers);
  let arithmetic = numbers[0] + operation + numbers[1];

  console.log(calculateNumbers(arithmetic));
}

function askUserNumbers(lang) {
  let firstNumber = giveUserNumber(lang);
  let secondNumber = giveUserNumber(lang);

  return [parseInt(firstNumber), parseInt(secondNumber)];
}

function askUserOperation(lang, numbers) {
  console.clear();
  let operation = rlSync.question(MSG[lang]["operation"]["ask"]);
  while (notValid.checkOpertaion(operation)) {
    console.clear();
    operation = rlSync.question(
      `${operation} ${MSG[lang]["operation"]["error"]}`,
    );
  }
  divideByZeroCheck(lang, numbers, operation);
  return giveUserOperation(operation);
}

function calculateNumbers(arithmetic) {
  return eval(arithmetic);
}

function giveUserNumber(lang) {
  console.clear();
  let number = rlSync.question(MSG[lang]["number"]["ask"]);
  while (notValid.checkNumbers(number)) {
    console.clear();
    number = rlSync.question(`"${number}" ${MSG[lang]["number"]["error"]}`);
  }
  return number;
}

function giveUserOperation(operation) {
  const CORRECTOPS = [
    ["1", "+", "add", "addition"],
    ["2", "-", "sub", "subtraction"],
    ["3", "*", "mul", "multiply"],
    ["4", "/", "div", "divide"],
  ];

  for (const arr of CORRECTOPS) {
    for (const op of arr) {
      if (operation == op) {
        return arr[1];
      }
    }
  }
}

function divideByZeroCheck(lang, numbers, operation) {
  console.clear();
  if (notValid.checkDivisionWithZero(numbers, operation)) {
    console.log(MSG[lang]["div-by-zero"]["error"]);
    setTimeout(main, 5000);
  }
}
