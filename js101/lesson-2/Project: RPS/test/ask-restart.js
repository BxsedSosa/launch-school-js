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
  "y",
  "n",
  "yes",
  "no",
];

for (const element of test) {
  console.log(
    `Element: ${element}\n Result: ${NOT_VALID.validateRetry(element)}\n`,
  );
}
