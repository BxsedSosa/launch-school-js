let rlSync = require("readline-sync");

let num1 = rlSync.question("Enter the first number\n");
let num2 = rlSync.question("Enter the first number\n");
let sum = Number(num1) + Number(num2);

console.log(`The numbers ${num1} and ${num2} add to ${sum}`);
