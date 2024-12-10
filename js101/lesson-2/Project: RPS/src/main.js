const RL_SYNC = require("readline-sync");
const MSG = require("../config/text.json");
const NOT_VALID = require("./validation");

main();

function main() {
  let option = askOption();
  let retry = askRestart();

  return [option, retry];
}

function askOption() {
  let userInput = askTemplate("pick", NOT_VALID.validateOption);
  return userInput;
}

function askRestart() {
  let userInput = askTemplate("restart", NOT_VALID.validateRetry);
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
