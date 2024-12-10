const RL_SYNC = require("readline-sync");
const MSG = require("../config/text.json");
const NOT_VALID = require("./validation");
const VALID_OPTIONS = {
  1: "rock",
  2: "paper",
  3: "sisscors",
};

function main() {}

function askOption() {
  let userInput = askTemplate("pick", NOT_VALID.validateOption);
  return userInput;
}

function askRestart() {
  let userInput = askTemplate("retart", NOT_VALID.validateRetry);
  return userInput;
}

function getComputerOption() {
  //pass
}

function increaseWinner(score) {
  return (score += 1);
}

function reachedThreeWins(scores) {
  //pass
}

function displayGameWinner() {
  //pass
}

function displayRoundWinner() {
  //pass
}

function askTemplate(textObject, validation) {
  let questions = getQuestionsFromJson(textObject);
  let userOption = RL_SYNC.question(questions.ask);

  while (validation(userOption)) {
    userOption = RL_SYNC.question(`"${userOption}" ${questions.retry}`);
  }

  return userOption;
}

function getQuestionsFromJson(string) {
  let questions = {
    ask: MSG[string]["ask"],
    retry: MSG[string]["retry"],
  };
  return questions;
}
