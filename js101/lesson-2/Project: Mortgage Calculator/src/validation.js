function checkLoanAmount(loanAmount) {
  if (loanAmount.length === 0) {
    return true;
  }

  for (let i = 0; i < loanAmount.length; i++) {
    if (isLetter(loanAmount[i])) {
      return true;
    }
  }
  return false;
}

function checkLoanAPR(loanAPR) {
  if (loanAPR.length === 0) {
    return true;
  }

  for (let i = 0; i < loanAPR.length; i++) {
    if (isLetter(loanAPR[i])) {
      return true;
    }
  }

  if (isFloat(loanAPR)) {
    return true;
  }

  return false;
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

function isFloat(number) {
  let parsedNum = String(parseInt(number));

  if (parsedNum === number) {
    return false;
  }

  return true;
}

module.exports = {
  checkLoanAmount,
  checkLoanDurtion,
  checkLoanAPR,
  hasComma,
};
