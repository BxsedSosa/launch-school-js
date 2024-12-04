const RLSYNC = require("readline-sync");
const NOTVALID = require("./validation");
const MSG = require("./text.json");
const FIGLET = require("figlet");
let language = "es";

console.clear();
displayText(MSG[language]["banner"]["intro"]);
setTimeout(main, 1500);

function main() {
  console.clear();
  let numbers = askUserNumbers(language);
  let operation = askUserOperation(language, numbers);
  let arithmeticTotal = calculateNumbers(numbers[0] + operation + numbers[1]);

  displayText(MSG[language]["banner"]["logo"]);
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
  displayText(MSG[lang]["banner"]["logo"]);

  operation = RLSYNC.question(MSG[lang]["operation"]["ask"]).toLowerCase();
  while (NOTVALID.checkOpertaion(lang, operation)) {
    console.clear();
    operation = RLSYNC.question(
      `${operation} ${MSG[lang]["operation"]["error"]}`,
    ).toLowerCase();
  }
  divideByZeroCheck(lang, numbers, operation);
  return giveUserOperation(lang, operation);
}

function calculateNumbers(arithmetic) {
  return eval(arithmetic);
}

function giveUserNumber(lang, position) {
  let number;
  console.clear();
  displayText(MSG[lang]["banner"]["logo"]);

  number = RLSYNC.question(MSG[lang]["number"]["ask"][position]);
  while (NOTVALID.checkNumbers(number)) {
    console.clear();
    number = RLSYNC.question(`"${number}" ${MSG[lang]["number"]["error"]}`);
  }
  return number;
}

function giveUserOperation(lang, operation) {
  const CORRECTOPS = [
    [
      "1",
      "+",
      MSG[lang]["symbol"]["1"]["add"],
      MSG[lang]["symbol"]["1"]["addition"],
    ],
    [
      "2",
      "-",
      MSG[lang]["symbol"]["2"]["sub"],
      MSG[lang]["symbol"]["2"]["subtraction"],
    ],
    [
      "3",
      "*",
      MSG[lang]["symbol"]["3"]["mul"],
      MSG[lang]["symbol"]["3"]["multiply"],
    ],
    [
      "4",
      "/",
      MSG[lang]["symbol"]["4"]["div"],
      MSG[lang]["symbol"]["4"]["divide"],
    ],
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
    [
      "1",
      MSG[lang]["retry"]["answers"]["1"]["yes"],
      MSG[lang]["retry"]["answers"]["1"]["y"],
    ],
    [
      "2",
      MSG[lang]["retry"]["answers"]["2"]["no"],
      MSG[lang]["retry"]["answers"]["2"]["n"],
    ],
  ];

  response = RLSYNC.question(MSG[lang]["retry"]["ask"]).toLowerCase();
  while (NOTVALID.checkRetry(lang, response)) {
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
      quit(lang);
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
    console.log("=====================================================\n");
  });
}

function languageSelect() {
  console.clear();
  displayText(MSG["en"]["banner"]["language"]);
}

function quit(lang) {
  console.clear();
  displayText(MSG[lang]["banner"]["outro"]);
}
