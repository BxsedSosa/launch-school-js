const MSG = require("../config/text.json");

function getUserOption(userInput) {
  return getValidEntry(userInput, MSG["valid-options"]);
}

function getComputerOption() {
  let cpuChoice = String(getRandomNumber());
  return getValidEntry(cpuChoice, MSG["valid-options"]);
}

function getUserRetry(userInput) {
  return getValidEntry(userInput, MSG["valid-retry"]);
}

function getWinner(playerOneInput, playerTwoInput) {
  const WINNING_OPTIONS = {
    1: ["rock", "scissors"],
    2: ["paper", "rock"],
    3: ["scissors", "paper"],
  };
  let joinedInputs = `${playerOneInput} ${playerTwoInput}`;

  if (playerOneInput === playerTwoInput) {
    return "tie";
  }

  for (const winningOption of Object.values(WINNING_OPTIONS)) {
    if (joinedInputs === winningOption.join(" ")) {
      return "player one";
    }
  }
  return "player two";
}

function giveWinnerPoint(roundWinner, scores) {
  if (roundWinner === "player one") {
    increaseWinner(scores.playerOne);
    console.log(scores);
    return scores;
  }

  if (roundWinner === "player two") {
    scores.playerTwo = increaseWinner(scores.playerTwo);
    console.log(scores);
    return scores;
  }
  return scores;
}

function getQuestionsFromJson(string) {
  let questions = {
    ask: MSG[string]["ask"],
    retry: MSG[string]["retry"],
  };
  return questions;
}

function getRandomNumber() {
  let min = 1;
  let max = 3;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getValidEntry(userInput, validOptions) {
  for (const element of Object.keys(validOptions)) {
    if (userInput === String(element)) {
      return validOptions[element];
    }
  }
  for (const element of Object.values(validOptions)) {
    if (userInput === String(element) || userInput === String(element)[0]) {
      return element;
    }
  }
  return null;
}

function increaseWinner(score) {
  return (score += 1);
}
module.exports = {
  getQuestionsFromJson,
  getComputerOption,
  getUserOption,
  getUserRetry,
  getWinner,
  giveWinnerPoint,
};
