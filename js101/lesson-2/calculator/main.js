const RLSYNC = require("readline-sync");
const NOTVALID = require("./validation");
const MSG = require("./text.json");
const FIGLET = require("figlet");

console.clear();
displayText("Welcome!");
setTimeout(main, 1500);

function main() {
  console.clear();
  let language = "en";
  let numbers = askUserNumbers(language);
  let operation = askUserOperation(language, numbers);
  let arithmeticTotal = calculateNumbers(numbers[0] + operation + numbers[1]);

  displayText("Calculator");
  console.log(
    `${MSG[language]["total"]}${arithmeticTotal}\n${numbers[0]} ${operation} ${numbers[1]} = ${arithmeticTotal}\n`,
  );
  askRetry(language);
}

function askUserNumbers(lang) {
  let firstNumber = giveUserNumber(lang, "first");
  let secondNumber = giveUserNumber(lang, "second");

  return [parseInt(firstNumber), parseInt(secondNumber)];
}

function askUserOperation(lang, numbers) {
  let operation;
  console.clear();
  displayText("Calculator");

  operation = RLSYNC.question(MSG[lang]["operation"]["ask"]).toLowerCase();
  while (NOTVALID.checkOpertaion(operation)) {
    console.clear();
    operation = RLSYNC.question(
      `${operation} ${MSG[lang]["operation"]["error"]}`,
    ).toLowerCase();
  }
  divideByZeroCheck(lang, numbers, operation);
  return giveUserOperation(operation);
}

function calculateNumbers(arithmetic) {
  return eval(arithmetic);
}

function giveUserNumber(lang, position) {
  let number;
  console.clear();
  displayText("Calculator");

  number = RLSYNC.question(MSG[lang]["number"]["ask"][position]);
  while (NOTVALID.checkNumbers(number)) {
    console.clear();
    number = RLSYNC.question(`"${number}" ${MSG[lang]["number"]["error"]}`);
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
  if (NOTVALID.checkDivisionWithZero(numbers, operation)) {
    console.log(MSG[lang]["div-by-zero"]["error"]);
    setTimeout(main, 5000);
  }
}

function askRetry(lang) {
  let response;
  const VALIDRETRY = [
    ["1", "yes", "y"],
    ["2", "no", "n"],
  ];

  response = RLSYNC.question(MSG[lang]["retry"]["ask"]).toLowerCase();
  while (NOTVALID.checkRetry(response)) {
    console.clear();
    response = RLSYNC.question(
      `"${response}" ${MSG[lang]["retry"]["error"]}`,
    ).toLowerCase();
  }

  for (const retry of VALIDRETRY[0]) {
    if (response === retry) {
      main();
    }
  }

  for (const exit of VALIDRETRY[1]) {
    if (response === exit) {
      quit();
    }
  }
}

function displayText(text) {
  FIGLET(text, (err, data) => {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
    console.log("=====================================================");
  });
}

function quit() {
  console.clear();
  displayText("Thank you!");
}
