// This will be where all the input validation will happen
const MSG = require("./text.json");

function checkNumbers(number) {
  number = parseInt(number);

  if (number === NaN || !Number.isInteger(number)) {
    return true;
  }
  return false;
}

function checkOpertaion(lang, operation) {
  const CorrectOps = [
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

  for (const arr of CorrectOps) {
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

function checkRetry(lang, string) {
  const ValidRetry = [
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

  for (const arr of ValidRetry) {
    for (const answer of arr) {
      if (string === answer) {
        return false;
      }
    }
  }
  return true;
}

function checkLanguage(input) {
  const ValidLang = [
    ["1", "es", "english"],
    ["2", "en", "espanol"],
  ];

  for (const language of ValidLang) {
    for (const answer of language)
      if (input === answer) {
        return false;
      }
  }
  return true;
}

module.exports = {
  checkNumbers,
  checkOpertaion,
  checkDivisionWithZero,
  checkRetry,
  checkLanguage,
};
