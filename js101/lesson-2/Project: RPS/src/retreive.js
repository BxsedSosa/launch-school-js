const MSG = require("../config/text.json");
const WINNING_OPTIONS = {
  1: [
    ["rock", "scissors"],
    ["rock", "lizard"],
  ],
  2: [
    ["paper", "rock"],
    ["paper", "spock"],
  ],
  3: [
    ["scissors", "paper"],
    ["scissors", "lizard"],
  ],
  4: [
    ["spock", "rock"],
    ["spock", "scissors"],
  ],
  5: [
    ["lizard", "spock"],
    ["lizard", "paper"],
  ],
};

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
  let joinedInputs = `${playerOneInput} ${playerTwoInput}`;

  if (playerOneInput === playerTwoInput) {
    return "tie";
  }

  for (const winningArray of Object.values(WINNING_OPTIONS)) {
    for (const winningOption of winningArray) {
      if (joinedInputs === winningOption.join(" ")) {
        return "player one";
      }
    }
  }
  return "player two";
}

function giveWinnerPoint(roundWinner, scores) {
  if (roundWinner === "player one") {
    scores.playerOne = increaseWinner(scores.playerOne);

    return scores;
  }

  if (roundWinner === "player two") {
    scores.playerTwo = increaseWinner(scores.playerTwo);

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
  let max = 5;

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
