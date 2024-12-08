const RL_SYNC = require("readline-sync");
const FIGLET = require("figlet");
const VALIDATION = require("./validation");
const CALCULATE = require("./calculations");
const MSG = require("../config/text.json");

main();

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

  displayBreakdown(monthlyPay, loanAmount, loanAPR * 100, yearlyDuration);
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

function askRetry() {
  const VALID_RETRY = [
    ["1", "y", "yes"],
    ["2", "n", "no"],
  ];

  let response = askTemplate("try-again", VALIDATION.checkRetryRepsonse);

  for (const retry of VALID_RETRY[0]) {
    if (response === retry) {
      main();
    }
  }

  for (const exit of VALID_RETRY[1]) {
    if (response === exit) {
      exitProgram();
    }
  }
}

function seperateComma(loanAmount) {
  loanAmount = loanAmount.split(",");
  return parseInt(loanAmount.join(""), 10);
}

function askTemplate(message, retryFunction) {
  let loanTemplate;

  if (message === "try-again") {
    return retryAskTemplate(message, retryFunction);
  }

  console.clear();
  customDisplayText("Loan Calculator");
  loanTemplate = RL_SYNC.question(MSG[message]["ask"]);

  while (retryFunction(loanTemplate)) {
    console.clear();
    customDisplayText("Loan Calculator");
    loanTemplate = RL_SYNC.question(
      `"${loanTemplate}" ${MSG[message]["retry"]}`,
    );
  }
  return loanTemplate.toLowerCase();
}

function retryAskTemplate(message, retryFunction) {
  let loanTemplate = RL_SYNC.question(MSG[message]["ask"]);

  while (retryFunction(loanTemplate)) {
    console.clear();
    customDisplayText("Loan Calculator");
    loanTemplate = RL_SYNC.question(
      `"${loanTemplate}" ${MSG[message]["retry"]}`,
    );
  }
  return loanTemplate.toLowerCase();
}

function displayBreakdown(monthlyPayments, loanAmount, loanAPR, loanDuration) {
  let loanMessage = {
    intro: MSG["breakdown"]["intro"],
    payment: MSG["breakdown"]["monthly"],
    amount: MSG["breakdown"]["amount"],
    apr: MSG["breakdown"]["apr"],
    duration: MSG["breakdown"]["duration"],
  };

  console.clear();
  customDisplayText("Loan Calculator");
  console.log(`${loanMessage["intro"]}`);
  console.log(`${loanMessage["payment"]}${monthlyPayments}\n`);
  console.log(
    `${loanMessage["duration"]}${loanDuration} years\n${loanMessage["amount"]}${loanAmount}\n${loanMessage["apr"]}${loanAPR}%\n`,
  );
  askRetry();
}

function customDisplayText(text) {
  displayText(text);
  console.log();
}

function displayText(text) {
  console.log(
    FIGLET.textSync(text, {
      font: "pagga",
      horizontalLayout: "fitted",
      verticalLayout: "default",
      width: 90,
      whitespaceBreak: false,
    }),
  );
}

function exitProgram() {
  console.clear();
  displayText(MSG["greeting"]["outro"]);
  setTimeout(console.clear, 2000);
  setTimeout(process.exit, 2300);
}

module.exports = {
  askLoanAmount,
  askLoanAPR,
  askLoanDuration,
  displayText,
};
