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
    let roundWinner = gameLoop();
    scores = RETREIEVE.giveWinnerPoint(roundWinner, scores);

    if (reachedThreeWins(scores)) {
      let retry = RETREIEVE.getUserRetry(askRestart());

      if (retry === "yes") {
        scores = restartGame();
      } else {
        running = false;
      }
    }
  }
}

function gameLoop() {
  let userOption = askOption();
  let cpuOption = RETREIEVE.getComputerOption();
  let roundResult = RETREIEVE.getWinner(userOption, cpuOption);

  displayRoundWinner(roundResult);
  return roundResult;
}

function askOption() {
  let userInput = askTemplate("pick", NOT_VALID.validateOption);

  return RETREIEVE.getUserOption(userInput.toLowerCase());
}

function askRestart() {
  let userInput = askTemplate("restart", NOT_VALID.validateRetry);

  return RETREIEVE.getUserRetry(userInput.toLowerCase());
}

function reachedThreeWins(scores) {
  if (scores.playerOne >= 3 || scores.playerTwo >= 3) {
    return true;
  }

  return false;
}

function displayGameWinner(gameWinner) {
  console.clear();
}

function displayRoundWinner(roundWinner) {
  console.clear();
  console.log(`${roundWinner} won this round!`);
}

function restartGame() {
  return { playerOne: 0, playerTwo: 0 };
}

function askTemplate(textObject, validation) {
  let questions = RETREIEVE.getQuestionsFromJson(textObject);
  let userOption = RL_SYNC.question(questions.ask);

  while (!validation(userOption)) {
    userOption = RL_SYNC.question(`"${userOption}" ${questions.retry}`);
  }

  return userOption;
}
