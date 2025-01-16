import { question } from "readline-sync";
import MSG from "../config/text.json" assert { type: "json" };

main();

// Main

function main() {
  let running = true;
  let cardDeck = shuffleDeck();

  while (running) {
    let winner;
    console.clear();
    let playerSelection = getMenuInput();

    if (playerSelection === "hit") {
      winner = gameLoop(cardDeck);
    }

    if (playerSelection === "balance") {
      console.log("balance");
    }

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
  let playerResult = playerTurn(deck, playerHand, dealerHand);

  return;
}

function dealersTurn(dealerHand) {
  // pass
}

function playerTurn(deck, playerHand, dealerHand) {
  let playerScore = determineValues(getValues(playerHand));

  while (playerScore < 21) {
    console.clear();
    displayStartingCards(playerHand, dealerHand);
    let playerSelection = playerAnswer(playerHand, dealerHand);

    if (playerSelection === "hit") {
      giveCard(deck, playerHand);
      playerScore = determineValues(getValues(playerHand));
    } else if (playerSelection === "stand") {
      break;
    }
  }

  return playerScore;
}

function playerAnswer(playerHand, dealersHand) {
  const VALID_INPUTS = MSG["game-inputs"];
  const PROMPT = MSG["game-question"];

  displayStartingCards(playerHand, dealersHand);
  let playerSelection = question(PROMPT.ask);

  while (checkValidInput(playerSelection.toLowerCase(), VALID_INPUTS)) {
    displayStartingCards(playerHand, dealersHand);
    playerSelection = question(`${playerSelection} ${PROMPT.retry}`);
  }

  return getValidInput(playerSelection.toLowerCase(), VALID_INPUTS);
}

function startHand(deck, player, dealer) {
  for (let i = 0; i < 2; i++) {
    giveCard(deck, player);
    giveCard(deck, dealer);
  }
}

// Menu

function getMenuInput() {
  const VALID_INPUTS = MSG["menu-input"];
  const PROMPT = MSG["menu-questions"];

  let userInput = question(PROMPT.ask);

  while (checkValidInput(userInput, VALID_INPUTS)) {
    userInput = question(PROMPT.retry);
  }

  return getValidInput(userInput, VALID_INPUTS);
}

// Cards

function createDeck() {
  let suits = MSG["card"]["suits"];
  let faces = MSG["card"]["faces"];
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
  let royals = MSG["card"]["royals"];
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
  console.clear();
  displayCards(playerHand);
  displayCards(dealerHand, true);
}

function displayCards(hand, isDealer = false) {
  let cardDisplay;
  let suits = getSuits(hand);
  let values = getValues(hand);

  if (isDealer) {
    displayScore(values.slice(0, 1), true);
    console.log("Dealer Hand: ");
    suits[1] = "?";
    values[1] = "?";
  } else {
    displayScore(values);
    console.log("Player Hand: ");
  }

  cardDisplay = joinCardsForDisplay(suits, values);

  for (let line of cardDisplay) {
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

function displayScore(handValues, isDealer = false) {
  const PROMPT = MSG["values"];
  let values = determineValues(handValues);
  if (isDealer) {
    console.log(`${PROMPT.dealer} ${values}`);
  } else {
    console.log(`${PROMPT.player} ${values}`);
  }
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
