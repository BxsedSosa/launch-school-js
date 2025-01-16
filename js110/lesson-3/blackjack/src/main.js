import { question } from "readline-sync";
import MSG from "../config/text.json" assert { type: "json" };

main();

// Main

function main() {
  let running = true;
  let cardDeck = shuffleDeck();

  while (running) {
    let playerSelection = getMenuInput();

    switch (playerSelection) {
      case "bet":
        gameLoop(cardDeck);
        break;
      case "balance":
        console.log("balance");
        break;
      case "rules":
        console.log("rules");
        break;
      case "exit":
        console.clear();
        running = false;
        break;
    }
  }
}

// Game loop

function gameLoop(deck) {
  let dealerResult, playerResult;
  let playerHand = [];
  let dealerHand = [];

  startHand(deck, playerHand, dealerHand);
  playerResult = checkPlayerBust(playerTurn(deck, playerHand, dealerHand));

  if (playerResult.result) {
    dealerResult = checkPlayerBust(dealersTurn(deck, dealerHand, playerHand));
  }
  displayAfterPlayerTurn(playerHand, dealerHand, true);
  wait(5000);
}

function playerTurn(deck, playerHand, dealerHand) {
  let playerScore = determineValues(getValues(playerHand));

  while (playerScore < 21) {
    displayStartingCards(playerHand, dealerHand, true);
    let playerSelection = validateplayerAnswer(playerHand, dealerHand);

    if (playerSelection === "hit") {
      giveCard(deck, playerHand);
      playerScore = determineValues(getValues(playerHand));
    } else if (playerSelection === "stand") {
      break;
    }
  }

  return playerScore;
}

function dealersTurn(deck, dealerHand, playerHand) {
  let dealerScore = determineValues(getValues(dealerHand));

  while (dealerScore < 17) {
    displayAfterPlayerTurn(playerHand, dealerHand, true);
    giveCard(deck, dealerHand);
    wait(3000);
    dealerScore = determineValues(getValues(dealerHand));
  }

  return dealerScore;
}

function checkPlayerBust(handValue) {
  if (handValue <= 21) {
    return {
      result: true,
      value: handValue,
    };
  }

  return {
    result: false,
    value: handValue,
  };
}

function startHand(deck, player, dealer) {
  for (let i = 0; i < 2; i++) {
    giveCard(deck, player);
    giveCard(deck, dealer);
  }
}

// Menu

function getMenuInput() {
  const VALID_INPUTS = MSG["menu-inputs"];
  const PROMPT = MSG["menu-questions"];

  console.clear();
  let userInput = question(PROMPT.ask);

  while (checkValidInput(userInput.toLowerCase(), VALID_INPUTS)) {
    console.clear();
    userInput = question(`${userInput} ${PROMPT.retry}`);
  }

  return getValidInput(userInput.toLowerCase(), VALID_INPUTS);
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

function validateplayerAnswer(playerHand, dealersHand) {
  const VALID_INPUTS = MSG["game-inputs"];
  const PROMPT = MSG["game-question"];

  displayStartingCards(playerHand, dealersHand, true);
  let playerSelection = question(PROMPT.ask);

  while (checkValidInput(playerSelection.toLowerCase(), VALID_INPUTS)) {
    displayStartingCards(playerHand, dealersHand, true);
    playerSelection = question(`${playerSelection} ${PROMPT.retry}`);
  }

  return getValidInput(playerSelection.toLowerCase(), VALID_INPUTS);
}

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

function displayStartingCards(playerHand, dealerHand, clearConsole = false) {
  if (clearConsole) {
    console.clear();
  }
  displayCards(dealerHand, true, true);
  displayCards(playerHand);
}

function displayAfterPlayerTurn(playerHand, dealerHand, clearConsole = false) {
  if (clearConsole) {
    console.clear();
  }
  displayCards(dealerHand, true);
  displayCards(playerHand);
}

function displayCards(hand, isDealer = false, isStart = false) {
  let cardDisplay;
  let suits = getSuits(hand);
  let values = getValues(hand);

  if (isDealer && isStart) {
    displayScore(values.slice(0, 1), true);
    console.log("Dealer Hand: ");
    suits[1] = "?";
    values[1] = "?";
  } else if (isDealer) {
    displayScore(values);
    console.log("Dealer Hand: ");
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

// Utility

function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}
