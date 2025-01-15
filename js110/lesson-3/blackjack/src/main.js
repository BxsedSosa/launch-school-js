import rlSync from "readline-sync";
import MSG from "../config/text.json" assert { type: "json" };

main();

function main() {
  let running = true;
  let cardDeck = shuffleDeck();

  while (running) {
    let playerSelection = rlSync.question("Beginning:\n>>> ");
    let winner = gameLoop(cardDeck);

    if (playerSelection === "exit") {
      running = false;
    }
  }
}

function gameLoop(deck) {
  let playerHand = [];
  let dealerHand = [];

  startHand(deck, playerHand, dealerHand);
  let playerResult = playerTurn(deck, playerHand);

  return;
}

function dealersTurn(dealerHand) {
  // pass
}

function playerTurn(deck, playerHand) {
  let playerScore = determineValues(getValues(playerHand));

  while (playerScore < 21) {
    let playerSelection = playerAnswer();
    console.log(`Score: ${playerScore}`);
    displayCards(playerHand, true);

    if (playerSelection === "hit") {
      giveCard(deck, playerHand);
    } else {
      break;
    }
  }

  return playerScore;
}

function playerAnswer() {
  let prompt = {
    ask: MSG["playerQuestion"]["ask"],
    retry: MSG["playerQuestion"]["retry"],
  };

  let VALID_INPUT = {
    hit: ["1", "hit", "h"],
    stand: ["2", "stand", "s"],
  };

  let playerSelection = rlSync.question(prompt.ask);

  while (checkValidInput(playerSelection, VALID_INPUT)) {
    playerSelection = rlSync.question(`${playerSelection} ${prompt.retry}`);
  }

  return playerSelection;
}

function hitNewCard(deck, playerHand) {
  giveCard(deck, playerHand);
}

function startHand(deck, player, dealer) {
  for (let i = 0; i < 2; i++) {
    giveCard(deck, player);
    giveCard(deck, dealer);
  }
}

function createDeck() {
  let suits = ["C", "S", "D", "H"];
  let faces = ["K", "Q", "J", "A"];
  let numbers = Array(9)
    .fill()
    .map((_, i) => i + 2);
  let values = numbers.concat(faces);

  return values
    .map((value) => {
      return suits.map((suit) => [suit, value]);
    })
    .flat();
}

function giveCard(deck, hand) {
  console.log(deck.length);
  if (deck.length < 4) {
    deck.push.apply(deck, resetDeck());
  }

  hand.push(deck.shift());
}

function shuffleDeck() {
  return createDeck().sort(() => Math.random() - 0.5);
}

function getChips() {
  return 100;
}

function resetDeck() {
  return shuffleDeck();
}

function getSuits(hand) {
  return hand.map((card) => {
    return card[0];
  });
}

function getValues(hand) {
  return hand.map((card) => {
    return card[1];
  });
}

function evaluateAceScore(score) {
  if (score + 11 > 21) {
    return (score += 1);
  }

  return (score += 11);
}

function determineValues(hand) {
  let royals = ["K", "Q", "J"];
  let aces = 0;
  let score = 0;

  for (let value of hand) {
    if (royals.includes(value)) {
      score += 10;
    } else if (value === "A") {
      aces += 1;
    } else {
      score += value;
    }
  }

  if (aces) {
    for (let i = 0; i < aces; i++) {
      score = evaluateAceScore(score);
    }
  }

  return score;
}

function displayCards(hand, player = false) {
  let suits = getSuits(hand);
  let values = getValues(hand);
  let display = joinCardsForDisplay(suits, values);

  if (player) {
    console.log("Player Hand: ");
  } else {
    console.log("Dealer Hand: ");
  }

  for (let line of display) {
    console.log(line.join("  "));
  }
}

function createTextCard(suit, value) {
  if (value === 10) {
    return ` ------ \n|${suit}     |\n|  ${value}  |\n|      |\n ------ `;
  }
  return ` ------ \n|${suit}     |\n|   ${value}  |\n|      |\n ------ `;
}

function joinCardsForDisplay(suits, values) {
  let display = Array(suits.length)
    .fill()
    .map((_, idx) => {
      return createTextCard(suits[idx], values[idx]);
    })
    .map((string) => string.split("\n"));

  return display[0].map((_, cardIdx) => {
    return display.map((_, displayIdx, arr) => {
      return arr[displayIdx][cardIdx];
    });
  });
}

function getPlayerBet(playerAmount) {
  // pass
}

function checkValidInput(playerInput, validInputs) {
  return true;
}

function checkValidBet(playerAmount) {
  // pass
}
