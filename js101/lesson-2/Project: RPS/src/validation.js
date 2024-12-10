const MSG = require("../config/text.json");

function validateOption(userInput) {
  return validateTemplate(MSG["valid-options"], userInput);
}

function validateRetry(userInput) {
  return validateTemplate(MSG["valid-retry"], userInput);
}

function validateTemplate(validInputs, userInput) {
  if (
    loopThroughObject(validInputs, userInput, true) ||
    loopThroughObject(validInputs, userInput, false)
  ) {
    return true;
  }
  return false;
}

function loopThroughObject(validOptions, userInput, isKey) {
  if (isKey) {
    for (const element of Object.keys(validOptions)) {
      if (userInput.toLowerCase() === String(element)) {
        return true;
      }
    }
  } else {
    for (const element of Object.values(validOptions)) {
      if (
        userInput.toLowerCase() === String(element) ||
        userInput.toLowerCase() === String(element)[0]
      ) {
        return true;
      }
    }
  }
  return false;
}

module.exports = {
  validateOption,
  validateRetry,
};
