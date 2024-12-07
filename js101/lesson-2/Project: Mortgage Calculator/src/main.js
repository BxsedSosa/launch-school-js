// Consolidate the ask functions to a boilerplate to clean up Code

const RL_SYNC = require("readline-sync");
const VALIDATION = require("./validation");
const CALCULATE = require("./calculations");
const MSG = require("../config/text.json");
const LANGUAGE = "en";

console.log(main());

function main() {
  let loanAmount = askLoanAmnt();
  let yearlyDuration = askLoanDuration();
  let loanAPR = askLoanAPR();
  let monthlyDuration = CALCULATE.convertDurtion(yearlyDuration);
  let loanMPR = CALCULATE.convertAPR(loanAPR);
  let monthlyPay = CALCULATE.calcMonthlyPayment(
    loanAmount,
    monthlyDuration,
    loanMPR,
  );

  return monthlyPay;
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
    "What is the loans APR?: (Whole numbers)\nExample: 5\n>>> ",
  );

  while (VALIDATION.checkLoanAPR(loanAPR)) {
    loanAPR = RL_SYNC.question(
      `"${loanAPR}" is not a valid response!\nWhat is the Loans APR?: (Whole numbers)\nExample: 5\n>>> `,
    );
  }

  return Number(loanAPR) * 0.01;
}

function askLoanDuration() {
  let loanDuration = RL_SYNC.question(
    "What is the loans duration?: (In years)\n>>> ",
  );

  while (VALIDATION.checkLoanDurtion(loanDuration)) {
    loanDuration = RL_SYNC.question(
      `"${loanDuration}" is not a valid response!\nWhat is the loans duration?: (In years)\n>>>`,
    );
  }

  return Number(loanDuration);
}

function seperateComma(loanAmount) {
  loanAmount = loanAmount.split(",");
  return parseInt(loanAmount.join(""), 10);
}

function askTemplate(message, retryFunction, retryMessage) {
  let loanTemplate = RL_SYNC.question(message);

  while (retryFunction(loanTemplate)) {
    loanTemplate = RL_SYNC.question(`"${loanTemplate}" ${retryMessage}`);
  }

  return loanTemplate;
}

module.exports = {
  askLoanAmnt,
  askLoanAPR,
  askLoanDuration,
};
