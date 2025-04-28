let repeatedSubstring = (string) => {
  let mostRepeated;
  let highestCount = 0;

  for (let i = 1; i <= string.length; i++) {
    let counter = 0;
    let subString = string.slice(0, i);

    if (string.length % subString.length === 0) {
      for (let j = 0; j <= string.length; j += subString.length) {
        if (subString === string.slice(j, j + subString.length)) {
          counter += 1;
        } else {
          break;
        }
      }
    }

    if (counter >= highestCount) {
      highestCount = counter;
      mostRepeated = subString;
    }
    counter = 0;
  }

  return [mostRepeated, highestCount];
};

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(repeatedSubstring("xyzxyzxyz"), ["xyz", 3]));
p(eq(repeatedSubstring("xyxy"), ["xy", 2]));
p(eq(repeatedSubstring("xyz"), ["xyz", 1]));
p(eq(repeatedSubstring("aaaaaaaa"), ["a", 8]));
p(eq(repeatedSubstring("superduper"), ["superduper", 1]));
