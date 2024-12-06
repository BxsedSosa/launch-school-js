function checkLoanAmount(loanAmount) {
  if (loanAmount.length == 0) {
    return true;
  }

  for (let i = 0; i < loanAmount.length; i++) {
    if (isLetter(loanAmount[i])) {
      return true;
    }
  }
  return false;
}

function checkLoanAPY() {
  // pass
}

function checkLoanDurtion() {
  // pass
}

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

function hasComma(loanAmount) {
  for (let i = 0; i < loanAmount.length; i++) {
    if (loanAmount[i] === ",") {
      return true;
    }
  }

  return false;
}

module.exports = {
  checkLoanAmount,
  checkLoanDurtion,
  checkLoanAPY,
  hasComma,
};
