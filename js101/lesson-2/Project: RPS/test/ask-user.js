const NOT_VALID = require("../src/validation");

let test = [
  "1",
  "rock",
  "r",
  "2",
  "paper",
  "p",
  "3",
  "sisscors",
  "s",
  " ",
  "jfldksajlkj",
  "131",
  "0",
  "#$",
  "/",
  "ROCK",
  "R",
  "P",
  "PAPER",
  "SISSCORS",
  "S",
  "spock",
  "lizard",
  "l",
  "L",
];

for (const element of test) {
  console.log(
    `Element: ${element}\n Result: ${NOT_VALID.validateOption(element)}\n`,
  );
}
