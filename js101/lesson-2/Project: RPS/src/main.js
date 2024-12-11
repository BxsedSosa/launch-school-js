const RL_SYNC = require("readline-sync");
const NOT_VALID = require("./validation");
const RETREIEVE = require("./retreive");

main();

function main() {
  let running = true;
  let scores = {
    playerOne: 0,
    playerTwo: 0,
  };

  while (running) {
    let userOption = askOption();
    let retry = askRestart();
    let cpuOption = RETREIEVE.getComputerOption();
    let roundWinner = RETREIEVE.getWinner(userOption, cpuOption);

    RETREIEVE.giveWinnerPoint(roundWinner, scores);

    console.log([userOption, retry, cpuOption, roundWinner, scores]);
    running = reachedThreeWins(scores, retry);
  }
}

function askOption() {
  let userInput = askTemplate("pick", NOT_VALID.validateOption);
  return RETREIEVE.getUserOption(userInput.toLowerCase());
}

function askRestart() {
  let userInput = askTemplate("restart", NOT_VALID.validateRetry);
  return RETREIEVE.getUserRetry(userInput.toLowerCase());
}

function reachedThreeWins(scores, retry) {
  if (scores.playerOne >= 3 || scores.playerTwo >= 3) {
    return false;
  }
  return true;
}

function displayGameWinner() {
  //pass
}

function displayRoundWinner() {
  //pass
}

function resetScore(scores) {
  scores.playerOne = 0;
  scores.playerTwo = 0;
}

function askTemplate(textObject, validation) {
  let questions = RETREIEVE.getQuestionsFromJson(textObject);
  let userOption;

  userOption = RL_SYNC.question(questions.ask);

  while (!validation(userOption)) {
    userOption = RL_SYNC.question(`"${userOption}" ${questions.retry}`);
  }

  return userOption;
}
