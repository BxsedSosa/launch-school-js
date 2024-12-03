const rlSync = require("readline-sync");
const notValid = require("./validation");
const MSG = require("./text.json");

main();

function main() {
  console.clear();
  let language = "en";
  let numbers = askUserNumbers(language);
  let operation = askUserOperation(language);

  divideByZeroCheck(language, numbers, operation);
}

function askUserNumbers(lang) {
  let firstNumber = userNumber(lang);
  let secondNumber = userNumber(lang);

  return [parseInt(firstNumber), parseInt(secondNumber)];
}

function askUserOperation(lang) {
  console.clear();
  let operation = rlSync.question(MSG[lang]["operation"]["ask"]);
  while (notValid.checkOpertaion(operation)) {
    console.clear();
    operation = rlSync.question(
      `${operation} ${MSG[lang]["operation"]["error"]}`,
    );
  }
  return operation;
}

function calculateNumbers(numbers, operation) {
  //pass
}

function userNumber(lang) {
  console.clear();
  let number = rlSync.question(MSG[lang]["number"]["ask"]);
  while (notValid.checkNumbers(number)) {
    console.clear();
    number = rlSync.question(`"${number}" ${MSG[lang]["number"]["error"]}`);
  }
  return number;
}

function divideByZeroCheck(lang, numbers, operation) {
  console.clear();
  if (notValid.checkDivisionWithZero(numbers, operation)) {
    console.log(MSG[lang]["div-by-zero"]["error"]);
    setTimeout(main, 5000);
  }
}
