function isAlpha(char) {
  return /^[a-z]$/i.test(char);
}

function tooManySpaces(string) {
  let newString = [];
  let counter = 1;
  while (counter < string.length) {
    if (string[counter] === " " && string[counter - 1] === " ") {
      counter += 1;
      continue;
    }
    newString.push(string[counter - 1]);
    counter += 1;
  }
  return newString.join("");
}

function cleanUp(string) {
  let stringArr = string.split("");
  for (let i = 0; i < stringArr.length; i++) {
    if (!isAlpha(stringArr[i])) {
      stringArr[i] = " ";
    }
  }
  return tooManySpaces(stringArr);
}

console.log(cleanUp("---what's my +*& line?")); // " what s my line ")
