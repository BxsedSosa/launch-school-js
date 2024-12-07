const RL_SYNC = require("readline-sync");
const VALIDATION = require("./validation");
const CALCULATE = require("./calculations");
const MSG = require("../config/text.json");

console.log(main());

function main() {
  let loanAmount = askLoanAmount();
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

function askTemplate(message, retryFunction, retryMessage) {
  let loanTemplate = RL_SYNC.question(message);

  while (retryFunction(loanTemplate)) {
    loanTemplate = RL_SYNC.question(`"${loanTemplate}" ${retryMessage}`);
  }

  return loanTemplate;
}

function askLoanAmount() {
  let loanAmount = askTemplate(
    "How much is the loan?:\n>>> $",
    VALIDATION.checkLoanAmount,
    "is not a valid response!\nHow much is the loan?:\n>>> $",
  );

  if (VALIDATION.hasComma(loanAmount)) {
    return seperateComma(loanAmount);
  }

  return Number(loanAmount);
}

function askLoanAPR() {
  let loanAPR = askTemplate(
    "What is the loans APR?:\n>>> ",
    VALIDATION.checkLoanAPR,
    "is not a valid response!\n What is the loans APR?:\n>>> ",
  );

  return Number(loanAPR) * 0.01;
}

function askLoanDuration() {
  let loanDuration = askTemplate(
    "What is the loans duration?: (In years)\n>>> ",
    VALIDATION.checkLoanDurtion,
    "is not a valid response!\nWhat is the loans duation?: (In years)\n>>> ",
  );

  return Number(loanDuration);
}

function seperateComma(loanAmount) {
  loanAmount = loanAmount.split(",");
  return parseInt(loanAmount.join(""), 10);
}

module.exports = {
  askLoanAmount,
  askLoanAPR,
  askLoanDuration,
};
