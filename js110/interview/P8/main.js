let longestVowelSubstring = (string) => {
  const RE = /[aeiou]/;
  let chars = string.split("");

  return chars.reduce((highestCount, currEle, idx) => {
    let currentHighest = 0;

    if (RE.test(currEle)) {
      currentHighest += 1;
      for (let char of chars.slice(idx + 1)) {
        if (RE.test(char)) {
          currentHighest += 1;
        } else {
          break;
        }
      }
    }
    if (currentHighest > highestCount) return currentHighest;

    return highestCount;
  }, 0);
};

const p = console.log;
p(longestVowelSubstring("cwm") === 0);
p(longestVowelSubstring("many") === 1);
p(longestVowelSubstring("launchschoolstudents") === 2);
p(longestVowelSubstring("eau") === 3);
p(longestVowelSubstring("beauteous") === 3);
p(longestVowelSubstring("sequoia") === 4);
p(longestVowelSubstring("miaoued") === 5);
