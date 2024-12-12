const WINNING_OPTIONS = {
  1: [
    ["rock", "scissors"],
    ["rock", "lizard"],
  ],
  2: [
    ["paper", "rock"],
    ["paper", "spock"],
  ],
  3: [
    ["scissors", "paper"],
    ["scissors", "lizard"],
  ],
  4: [
    ["spock", "rock"],
    ["spock", "scissors"],
  ],
  5: [
    ["lizard", "spock"],
    ["lizard", "paper"],
  ],
};

function getWinner(playerOneInput, playerTwoInput) {
  let joinedInputs = `${playerOneInput} ${playerTwoInput}`;

  if (playerOneInput === playerTwoInput) {
    return "tie";
  }

  for (const winningArray of Object.values(WINNING_OPTIONS)) {
    for (const winningOption of winningArray) {
      if (joinedInputs === winningOption.join(" ")) {
        return "player one";
      }
    }
  }
  return "player two";
}

let test = [
  ["rock", "scissors", "player one"],
  ["paper", "rock", "player one"],
  ["scissors", "paper", "player one"],
  ["rock", "rock", "tie"],
  ["paper", "paper", "tie"],
  ["scissors", "scissors", "tie"],
  ["rock", "paper", "player two"],
  ["paper", "scissors", "player two"],
  ["scissors", "rock", "player two"],
  ["rock", "lizard", "player one"],
  ["paper", "spock", "player one"],
  ["scissors", "lizard", "player one"],
  ["lizard", "spock", "player one"],
  ["lizard", "paper", "player one"],
  ["spock", "rock", "player one"],
  ["spock", "scissors", "player one"],
  ["spock", "spock", "tie"],
  ["lizard", "lizard", "tie"],
];

for (const element of test) {
  let correctAnswer = element.pop();
  let testAnswer = getWinner(element[0], element[1]);

  console.log(correctAnswer === testAnswer);
}
