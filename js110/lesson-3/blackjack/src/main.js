import rlSync from "readline-sync";
import MSG from "../config/text.json" assert { type: "json" };

main();

// Main

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

// Game loop

function gameLoop(deck) {
  let playerHand = [];
  let dealerHand = [];

  startHand(deck, playerHand, dealerHand);
  displayStartingCards(playerHand, dealerHand);
  let playerResult = playerTurn(deck, playerHand, dealerHand);

  return;
}

function dealersTurn(dealerHand) {
  // pass
}

function playerTurn(deck, playerHand, dealerHand) {
  let playerScore = determineValues(getValues(playerHand));

  while (playerScore < 21) {
    let playerSelection = playerAnswer();
    console.log(`Score: ${playerScore}`);
    displayStartingCards(playerHand, dealerHand);

    if (playerSelection === "hit") {
      giveCard(deck, playerHand);
      playerScore = determineValues(getValues(playerHand));
    } else if (playerSelection === "stand") {
      break;
    }
  }

  return playerScore;
}

function playerAnswer() {
  const VALID_INPUTS = {
    hit: ["1", "hit", "h"],
    stand: ["2", "stand", "s"],
  };

  const PROMPT = {
    ask: MSG["playerQuestion"]["ask"],
    retry: MSG["playerQuestion"]["retry"],
  };

  let playerSelection = rlSync.question(PROMPT.ask);

  while (checkValidInput(playerSelection.toLowerCase(), VALID_INPUTS)) {
    playerSelection = rlSync.question(`${playerSelection} ${PROMPT.retry}`);
  }

  return getValidInput(playerSelection.toLowerCase(), VALID_INPUTS);
}

function startHand(deck, player, dealer) {
  for (let i = 0; i < 2; i++) {
    giveCard(deck, player);
    giveCard(deck, dealer);
  }
}

// Cards

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
  if (deck.length < 4) {
    deck.push.apply(deck, resetDeck());
  }

  hand.push(deck.shift());
}

function shuffleDeck() {
  return createDeck().sort(() => Math.random() - 0.5);
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

// Input Validation

function checkValidInput(playerInput, validInputs) {
  for (let key in validInputs) {
    if (validInputs[key].includes(playerInput)) {
      return false;
    }
  }
  return true;
}

function getValidInput(playerInput, validInputs) {
  for (let key in validInputs) {
    if (validInputs[key].includes(playerInput)) {
      return key;
    }
  }
}

// Displays

function displayStartingCards(playerHand, dealerHand) {
  displayCards(playerHand);
  displayCards(dealerHand, true);
}

function displayCards(hand, dealer = false) {
  let display;
  let suits = getSuits(hand);
  let values = getValues(hand);

  if (dealer) {
    console.log("Dealer Hand: ");
    suits[1] = "?";
    values[1] = "?";
  } else {
    console.log("Player Hand: ");
  }

  display = joinCardsForDisplay(suits, values);

  for (let line of display) {
    console.log(line.join("  "));
  }
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

function createTextCard(suit, value) {
  if (value === 10) {
    return ` ------ \n|${suit}     |\n|  ${value}  |\n|      |\n ------ `;
  }
  return ` ------ \n|${suit}     |\n|   ${value}  |\n|      |\n ------ `;
}

// Chips

function getPlayerBet(playerAmount) {
  // pass
}

function checkValidBet(playerAmount) {
  // pass
}

function getChips() {
  return 100;
}
