let rlSync = require("readline-sync");

main();

function main() {
  let userNumber = Number(rlSync.question("Please enter a number:\n"));
  console.log(fib(userNumber));
}

function fib(number) {
  if (number < 2) {
    return number;
  }
  return fib(number - 1) + fib(number - 2);
}
