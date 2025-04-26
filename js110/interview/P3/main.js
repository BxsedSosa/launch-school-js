let upperCase2ndChar = (word) => {
  return word.split("").map((char, idx) => {
    if ((idx + 1) % 2 === 0) {
      return char.toUpperCase();
    }
    return char;
  });
};
let toWeirdCase = (str) => {
  return str
    .split(" ")
    .map((word, idx) => {
      if ((idx + 1) % 3 === 0) {
        return upperCase2ndChar(word).join("");
      }
      return word;
    })
    .join(" ");
};

let original = "Lorem Ipsum is simply dummy text of the printing world";
let expected = "Lorem Ipsum iS simply dummy tExT of the pRiNtInG world";
console.log(toWeirdCase(original) === expected);

original = "It is a long established fact that a reader will be distracted";
expected = "It is a long established fAcT that a rEaDeR will be dIsTrAcTeD";
console.log(toWeirdCase(original) === expected);

console.log(toWeirdCase("aaA bB c") === "aaA bB c");

original =
  "Mary Poppins' favorite word is " + "supercalifragilisticexpialidocious";
expected =
  "Mary Poppins' fAvOrItE word is " + "sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS";
console.log(toWeirdCase(original) === expected);
