const RL_SYNC = require("readline-sync");
const MSG = require("../config/text.json");
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
    let roundWinner = gameLoop(scores);
    scores = RETREIEVE.giveWinnerPoint(roundWinner, scores);

    if (reachedThreeWins(scores)) {
      let retry = RETREIEVE.getUserRetry(askRestart(scores));
      if (retry === "yes") {
        scores = restartGame();
      } else {
        running = false;
      }
    }
  }
}

function gameLoop(scores) {
  displayScore(scores);
  let userOption = askOption();
  let cpuOption = RETREIEVE.getComputerOption();
  displayCpuThinking(cpuOption);

  let roundResult = RETREIEVE.getWinner(userOption, cpuOption);

  displayRoundWinner(roundResult);
  return roundResult;
}

function askOption() {
  let userInput = askTemplate("pick", NOT_VALID.validateOption);

  return RETREIEVE.getUserOption(userInput.toLowerCase());
}

function askRestart(scores) {
  displayScore(scores);
  displayGameWinner(reachedThreeWins(scores));
  let userInput = askTemplate("restart", NOT_VALID.validateRetry);

  return RETREIEVE.getUserRetry(userInput.toLowerCase());
}

function askTemplate(textObject, validation) {
  let questions = RETREIEVE.getQuestionsFromJson(textObject);
  let userOption = RL_SYNC.question(questions.ask);

  while (!validation(userOption)) {
    userOption = RL_SYNC.question(`"${userOption}" ${questions.retry}`);
  }

  return userOption;
}

function reachedThreeWins(scores) {
  if (scores.playerOne === 3) {
    return "Player one";
  }

  if (scores.playerTwo === 3) {
    return "Computer";
  }

  return false;
}

function restartGame() {
  return { playerOne: 0, playerTwo: 0 };
}

function displayGameWinner(gameWinner) {
  console.log(`${gameWinner} won the game!`);
}

function displayRoundWinner(roundWinner) {
  console.log(`${roundWinner} won this round!`);
}

function displayScore(scores) {
  console.log(
    `Player One: ${scores.playerOne} | Computer: ${scores.playerTwo}\n`,
  );
}

function displayCpuThinking(cpuChoice) {
  console.log(`${MSG["cpu"]["picks"]} ${cpuChoice}`);
}
