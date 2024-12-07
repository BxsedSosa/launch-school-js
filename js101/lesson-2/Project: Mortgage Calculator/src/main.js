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

function askLoanAmount() {
  let loanAmount = askTemplate("amount", VALIDATION.checkLoanAmount);

  if (VALIDATION.hasComma(loanAmount)) {
    return seperateComma(loanAmount);
  }

  return Number(loanAmount);
}

function askLoanAPR() {
  let loanAPR = askTemplate("apr", VALIDATION.checkLoanAPR);

  return Number(loanAPR) * 0.01;
}

function askLoanDuration() {
  let loanDuration = askTemplate("duration", VALIDATION.checkLoanDurtion);

  return Number(loanDuration);
}

function seperateComma(loanAmount) {
  loanAmount = loanAmount.split(",");
  return parseInt(loanAmount.join(""), 10);
}

function askTemplate(message, retryFunction) {
  console.clear();
  let loanTemplate = RL_SYNC.question(MSG[message]["ask"]);

  while (retryFunction(loanTemplate)) {
    console.clear();
    loanTemplate = RL_SYNC.question(
      `"${loanTemplate}" ${MSG[message]["retry"]}`,
    );
  }

  return loanTemplate;
}

module.exports = {
  askLoanAmount,
  askLoanAPR,
  askLoanDuration,
};
