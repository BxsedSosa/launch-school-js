const RL_SYNC = require("readline-sync");
const NOT_VALID = require("./validation");
const RETREIEVE = require("./retreive");

console.log(main());

function main() {
  let userOption = askOption();
  let retry = askRestart();
  let cpuOption = RETREIEVE.getComputerOption();

  return [userOption, retry, cpuOption];
}

function askOption() {
  let userInput = askTemplate("pick", NOT_VALID.validateOption);
  return RETREIEVE.getUserOption(userInput.toLowerCase());
}

function askRestart() {
  let userInput = askTemplate("restart", NOT_VALID.validateRetry);
  return RETREIEVE.getUserRetry(userInput.toLowerCase());
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
  let questions = RETREIEVE.getQuestionsFromJson(textObject);
  let userOption;

  console.clear();
  userOption = RL_SYNC.question(questions.ask);

  while (!validation(userOption)) {
    console.clear();
    userOption = RL_SYNC.question(`"${userOption}" ${questions.retry}`);
  }

  return userOption;
}
