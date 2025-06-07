const rlSync = require("readline-sync");

const RPSgame = {
  human: createPlayer("human"),
  computer: createPlayer("computer"),

  displayWelcomeMessage() {
    console.log("Welcome to Rock, Paper, Scissors!");
  },

  displayGoodbyeMessage() {
    console.log("Thank you for playing Rock, Paper, Scissors!");
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chosed: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    if (
      (humanMove === "rock" && computerMove === "scissors") ||
      (humanMove === "paper" && computerMove === "rock") ||
      (humanMove === "scissors" && computerMove === "paper")
    ) {
      console.log("You win!");
    } else if (
      (humanMove === "rock" && computerMove === "paper") ||
      (humanMove === "paper" && computerMove === "scissors") ||
      (humanMove === "scissors" && computerMove === "rock")
    ) {
      console.log("Computer wins!");
    } else {
      console.log("It's a tie");
    }
  },

  playAgain() {
    let answer = rlSync.question("Would you like to play again? (y/n)");
    return answer.toLowerCase()[0] === "y";
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();

      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  },
};

function createPlayer(playerType) {
  return {
    playerType,
    move: null,

    choose() {
      const choices = ["rock", "paper", "scissors"];
      if (this.isHuman()) {
        let playerChoice;
        while (true) {
          playerChoice = rlSync.question(
            "Please choose rock, paper, or scissors:\n>>> "
          );

          if (choices.includes(playerChoice)) break;
          console.log("Sorry, invalid choice.");
        }

        this.move = playerChoice;
      } else {
        let randomIdx = Math.floor(Math.random() * choices.length);
        this.move = choices[randomIdx];
      }
    },

    isHuman() {
      return this.playerType === "human";
    },
  };
}

function createMove() {
  return {};
}

function createRule() {
  return {};
}

let compare = function (move1, move2) {};

RPSgame.play();
