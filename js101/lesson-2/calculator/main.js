const rlSync = require("readline-sync");
const notValid = require("./validation");
const MSG = require("./text.json");

main();

function main() {
  let language = "en";
  let numbers = askUserNumbers(language);
  console.log(numbers);
}

function askUserNumbers(lang) {
  let firstNumber;
  let secondNumber;

  firstNumber = rlSync.question(MSG[lang]["number"]["ask"]);
  while (notValid.checkNumbers(firstNumber)) {
    firstNumber = rlSync.question(MSG[lang]["number"]["error"]);
  }

  secondNumber = rlSync.question(MSG[lang]["number"]["ask"]);
  while (notValid.checkNumbers(secondNumber)) {
    secondNumber = rlSync.question(MSG[lang]["number"]["error"]);
  }

  return [Number(firstNumber), Number(secondNumber)];
}

function askUserOperation() {
  //pass
}

function calculateNumbers(numbers, operation) {
  //pass
}
