let isPangram = (sentence) => {
  const charMap = {};
  const start = 97;
  const end = 26;
  const reg = /[a-z]/;

  for (let i = start; i < start + end; i++) {
    charMap[String.fromCharCode(i)] = 0;
  }

  for (let char of sentence) {
    char = char.toLowerCase();
    if (reg.test(char)) {
      charMap[char] += 1;
    }
  }

  return !Object.values(charMap).includes(0);
};

const p = console.log;
p(isPangram("The quick, brown fox jumps over the lazy dog!") === true);
p(isPangram("The slow, brown fox jumps over the lazy dog!") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in fog.") === true);
p(isPangram("A wizard’s task is to vex chumps quickly in fog.") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in golf.") === true);

let myStr = "Sixty zippers were quickly picked from the woven jute bag.";
p(isPangram(myStr) === true);
