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

module.exports = {
  getQuestionsFromJson,
  getComputerOption,
  getUserOption,
  getUserRetry,
};
