let unscramble = (string1, string2) => {
  let mapKey = {};
  let startAlpha = 97;
  let endAlpha = 26;

  for (let i = startAlpha; i < startAlpha + endAlpha; i++) {
    mapKey[String.fromCharCode(i)] = 0;
  }

  for (let char of string1) {
    mapKey[char] += 1;
  }

  for (let char of string2) {
    mapKey[char] -= 1;
  }

  return !Object.values(mapKey)
    .map((num) => {
      return num < 0 ? false : true;
    })
    .includes(false);
};

const p = console.log;
p(unscramble("ansucchlohlo", "launchschool") === true);
p(unscramble("phyarunstole", "pythonrules") === true);
p(unscramble("phyarunstola", "pythonrules") === false);
p(unscramble("boldface", "coal") === true);
