function getWinner(playerOneInput, playerTwoInput) {
  const WINNING_OPTIONS = {
    1: ["rock", "scissors"],
    2: ["paper", "rock"],
    3: ["scissors", "paper"],
  };
  let joinedInputs = `${playerOneInput} ${playerTwoInput}`;

  if (playerOneInput === playerTwoInput) {
    return "tie";
  }

  for (const winningOption of Object.values(WINNING_OPTIONS)) {
    if (joinedInputs === winningOption.join(" ")) {
      return "player one";
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
];

for (const element of test) {
  let correctAnswer = element.pop();
  let testAnswer = getWinner(element[0], element[1]);

  console.log(correctAnswer === testAnswer);
}
