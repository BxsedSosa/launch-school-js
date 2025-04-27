let mostCommonChar = (string) => {
  let occurrences = {};

  string.split("").forEach((char) => {
    char = char.toLowerCase();
    if (!Object.keys(occurrences).includes(char)) {
      occurrences[char] = 1;
    } else {
      occurrences[char] += 1;
    }
  });

  return Object.keys(occurrences).reduce((highestCount, currVal) => {
    if (occurrences[currVal] > occurrences[highestCount]) {
      return currVal;
    }
    return highestCount;
  });
};
const p = console.log;
p(mostCommonChar("Hello World") === "l");
p(mostCommonChar("Mississippi") === "i");
p(mostCommonChar("Happy birthday!") === "h");
p(mostCommonChar("aaaaaAAAA") === "a");

let myStr = "Peter Piper picked a peck of pickled peppers.";
p(mostCommonChar(myStr) === "p");

myStr = "Peter Piper repicked a peck of repickled peppers. He did!";
p(mostCommonChar(myStr) === "e");
