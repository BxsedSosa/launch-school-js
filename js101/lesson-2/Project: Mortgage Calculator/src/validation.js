function generalValidation(string) {
  if (string.length === 0) {
    return true;
  }

  if (containsChar(string)) {
    return true;
  }
  return false;
}

function checkLoanAmount(loanAmount) {
  return generalValidation(loanAmount);
}

function checkLoanAPR(loanAPR) {
  loanAPR = generalValidation(loanAPR);
  if (!isFloat(loanAPR)) {
    return true;
  }
  return false;
}

function checkLoanDurtion(loanDuration) {
  return generalValidation(loanDuration);
}

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

function hasComma(loanAmount) {
  for (let idx = 0; idx < loanAmount.length; idx++) {
    if (loanAmount[idx] === ",") {
      return true;
    }
  }
  return false;
}

function isFloat(number) {
  let parsedNum = String(parseInt(number, 10));

  if (parsedNum === number) {
    return false;
  }
  return true;
}

function containsChar(string) {
  for (let idx = 0; idx < string.length; idx++) {
    if (isLetter(string[idx])) {
      return true;
    }
  }
  return false;
}

module.exports = {
  checkLoanAmount,
  checkLoanDurtion,
  checkLoanAPR,
  hasComma,
};
