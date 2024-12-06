const RL_SYNC = require("readline-sync");
const NOT_VALID = require("./validation");
const MSG = require("../config/text.json");

let x = RL_SYNC.question("Please enter:\n");

console.log(x);
