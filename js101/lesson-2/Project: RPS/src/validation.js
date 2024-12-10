function validateOption(userInput) {
  const VALID_OPTIONS = {
    1: "rock",
    2: "paper",
    3: "sisscors",
  };

  if (
    loopThroughObject(VALID_OPTIONS, userInput, true) ||
    loopThroughObject(VALID_OPTIONS, userInput, false)
  ) {
    return false;
  }

  return true;
}

function validateRetry(userInput) {
  const VALID_RETRY = {
    1: "yes",
    2: "no",
  };

  if (
    loopThroughObject(VALID_RETRY, userInput, true) ||
    loopThroughObject(VALID_RETRY, userInput, false)
  ) {
    return false;
  }

  return true;
}

function loopThroughObject(validOptions, userInput, isKey) {
  if (isKey) {
    for (const element of Object.keys(validOptions)) {
      if (userInput === String(element)) {
        return true;
      }
    }
  } else {
    for (const element of Object.values(validOptions)) {
      if (userInput === String(element) || userInput === String(element)[0]) {
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
