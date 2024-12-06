function convertAPR(loanAPR) {
  return loanAPR / 12;
}

function convertDurtion(loanDuration) {
  return loanDuration * 12;
}

function calcMonthlyPayment(loanAmount, loanDuration, loanMPR) {
  let monthly =
    loanAmount * (loanMPR / (1 - Math.pow(1 + loanMPR, -loanDuration)));

  return monthly.toFixed(2);
}

module.exports = {
  convertAPR,
  convertDurtion,
  calcMonthlyPayment,
};
