const RL_SYNC = require("readline-sync");
const FIGLET = require("figlet");
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

function askTemplate(message, retryFunction) {
  customDisplayText("Loan Calculator");
  let loanTemplate = RL_SYNC.question(MSG[message]["ask"]);

  while (retryFunction(loanTemplate)) {
    customDisplayText("Loan Calculator");
    loanTemplate = RL_SYNC.question(
      `"${loanTemplate}" ${MSG[message]["retry"]}`,
    );
  }

  return loanTemplate;
}

function seperateComma(loanAmount) {
  loanAmount = loanAmount.split(",");
  return parseInt(loanAmount.join(""), 10);
}

function customDisplayText(text) {
  console.clear();
  displayText(text);
}

function displayText(text) {
  console.log(
    FIGLET.textSync(text, {
      font: "standard",
      horizontalLayout: "fitted",
      verticalLayout: "fitted",
      width: 90,
      whitespaceBreak: false,
    }),
  );
}

module.exports = {
  askLoanAmount,
  askLoanAPR,
  askLoanDuration,
  displayText,
};
