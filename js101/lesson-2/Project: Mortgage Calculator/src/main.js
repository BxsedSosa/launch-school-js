const RL_SYNC = require("readline-sync");
const VALIDATION = require("./validation");
const CONVERT = require("./calculations");
const MSG = require("../config/text.json");
const LANGUAGE = "en";

function main() {
  //pass
}

function askLoanAmnt() {
  let loanAmount = RL_SYNC.question("How much is the loan?:\n>>> $");

  while (VALIDATION.checkLoanAmount(loanAmount)) {
    loanAmount = RL_SYNC.question(
      `"${loanAmount}" is not a valid response!\nHow much is the loan?:\n>>> $`,
    );
  }

  if (VALIDATION.hasComma(loanAmount)) {
    return seperateComma(loanAmount);
  }

  return Number(loanAmount);
}

function askLoanAPR() {
  let loanAPR = RL_SYNC.question(
    "What is the Loans APR?: (Whole numbers)\nExample: 5% or 5\n>>> ",
  );

  while (VALIDATION.checkLoanAPR(loanAPR)) {
    loanAPR = RL_SYNC.question(
      `"${loanAPR}" is not a valid response!\nWhat is the Loans APR?: (Whole numbers)\nExample: 5% or 5\n>>> `,
    );
  }

  return Number(loanAPR);
}

function askLoanDuration() {
  // pass
}

function displayText(language, nestedString) {
  //pass
}

function seperateComma(loanAmount) {
  loanAmount = loanAmount.split(",");
  return parseInt(loanAmount.join(""));
}

module.exports = {
  askLoanAmnt,
  askLoanAPR,
  askLoanDuration,
};
