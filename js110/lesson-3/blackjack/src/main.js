let rlSync = require("readline-sync");
let figlet = require("figlet");
let MSG = require("../config/text.json");

main();

// Main

function main() {
  let running = true;
  let userBalance = getStartingChips();
  let cardDeck = shuffleDeck();

  while (running) {
    let playerSelection = getMenuInput();

    switch (playerSelection) {
      case "bet": {
        let playerBet = getPlayerBet(userBalance);
        if (playerBet === "exit") break;

        let gameResult = gameLoop(cardDeck, playerBet);
        userBalance += makeTransaction(gameResult, playerBet);
        break;
      }
      case "balance": {
        userBalance = displayBalanceMenu(userBalance);
        break;
      }
      case "rules": {
        displayRulesMenu();
        break;
      }
      case "exit": {
        console.clear();
        running = false;
        break;
      }
    }
  }
}

// Game loop

function gameLoop(deck, playerBet) {
  let dealerResult, playerResult;
  let playerHand = [];
  let dealerHand = [];

  startHand(deck, playerHand, dealerHand);
  playerResult = playerTurn(deck, playerHand, dealerHand, playerBet);

  if (!playerResult["over21"] && !playerResult.blackjack) {
    dealerResult = dealersTurn(deck, dealerHand, playerHand, playerBet);
  }

  let winner = determineWinner(playerResult, dealerResult);
  displayWinner(playerHand, dealerHand, playerBet, winner);
  wait(3000);

  return winner;
}

function playerTurn(deck, playerHand, dealerHand, playerBet) {
  let playerScore = determineValues(getValues(playerHand));

  while (playerScore < 21) {
    displayCards(playerHand, dealerHand, playerBet, true, true);
    let playerSelection = validateplayerAnswer(
      playerHand,
      dealerHand,
      playerBet,
    );

    if (playerSelection === "hit") {
      giveCard(deck, playerHand);
      playerScore = determineValues(getValues(playerHand));
    } else if (playerSelection === "stand") {
      break;
    }
  }

  return checkPlayerBust(playerScore, playerHand);
}

function dealersTurn(deck, dealerHand, playerHand, playerBet) {
  let dealerScore = determineValues(getValues(dealerHand));

  while (dealerScore < 17) {
    displayCards(playerHand, dealerHand, playerBet, false, true);
    giveCard(deck, dealerHand);
    wait(3000);
    dealerScore = determineValues(getValues(dealerHand));
  }

  displayCards(playerHand, dealerHand, playerBet, false, true);

  return checkPlayerBust(dealerScore, dealerHand);
}

function checkPlayerBust(handValue, hand) {
  if (handValue <= 21) {
    return {
      over21: false,
      value: handValue,
      blackjack: checkBlackJack(hand),
    };
  }

  return {
    over21: true,
    value: handValue,
  };
}

function startHand(deck, player, dealer) {
  for (let idx = 0; idx < 2; idx++) {
    giveCard(deck, player);
    giveCard(deck, dealer);
  }
}

function checkBlackJack(hand) {
  let values = getValues(hand);
  let handValue = determineValues(values);

  return hand.length === 2 && !values.includes(10) && handValue === 21;
}

function determineWinner(playerResult, dealerResult) {
  if (dealerResult === undefined) {
    if (playerResult.blackjack) {
      return "blackjack";
    }
    return "bust";
  }

  if (!playerResult["over21"] && !dealerResult["over21"]) {
    if (playerResult.value > dealerResult.value) {
      return "winner";
    } else if (playerResult.value === dealerResult.value) {
      return "push";
    }
    return "bust";
  } else if (!playerResult["over21"] && dealerResult["over21"]) {
    return "winner";
  }
  return "bust";
}

// Menu

function getMenuInput() {
  const VALID_INPUTS = MSG["menu-inputs"];
  const PROMPT = MSG["menu-questions"];

  displayBanner(true);
  let userInput = rlSync.question(PROMPT.ask);

  while (checkValidInput(userInput.toLowerCase(), VALID_INPUTS)) {
    displayBanner(true);
    userInput = rlSync.question(`${userInput} ${PROMPT.retry}`);
  }

  return getValidInput(userInput.toLowerCase(), VALID_INPUTS);
}

// Cards

function createDeck() {
  let suits = MSG["card"]["suits"];
  let faces = MSG["card"]["faces"];
  let numbers = Array(9)
    .fill()
    .map((_, idx) => idx + 2);
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
    for (let idx = 0; idx < aces; idx++) {
      score = evaluateAceScore(score);
    }
  }

  return score;
}

// Input Validation

function validateplayerAnswer(playerHand, dealersHand, playerBet) {
  const VALID_INPUTS = MSG["game-inputs"];
  const PROMPT = MSG["game-question"];

  displayCards(playerHand, dealersHand, playerBet, true, true);
  let playerSelection = rlSync.question(PROMPT.ask);

  while (checkValidInput(playerSelection.toLowerCase(), VALID_INPUTS)) {
    displayCards(playerHand, dealersHand, playerBet, true, true);
    playerSelection = rlSync.question(`${playerSelection} ${PROMPT.retry}`);
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
  return "";
}

// Displays

function displayBanner(clear) {
  if (clear) {
    console.clear();
  }
  displayFigletText("Blackjack");
}

function displayWinner(playerHand, dealerHand, playerBet, winner) {
  displayCards(playerHand, dealerHand, playerBet, false, true);
  switch (winner) {
    case "blackjack":
      console.log(`You won by Blackjack!\nYou won $${playerBet * 2.5}\n`);
      break;
    case "winner":
      console.log(`You won!\nYou won $${playerBet * 2}`);
      break;
    case "push":
      console.log(`It was a push!`);
      break;
    default:
      console.log(`You lose!`);
  }
}

function displayCards(
  playerHand,
  dealerHand,
  playerBet,
  isHidden,
  clearConsole = false,
) {
  if (clearConsole) {
    console.clear();
  }
  displayBanner();
  getCardDisplay(dealerHand, true, isHidden);
  getCardDisplay(playerHand);
  displayBetAmount(playerBet);
}

function getCardDisplay(hand, isDealer = false, isHidden = false) {
  let cardDisplay;
  let suits = getSuits(hand);
  let values = getValues(hand);

  if (isDealer && isHidden) {
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
    console.log(`\n${PROMPT.player} ${values}`);
  }
}

function displayBetAmount(userBet) {
  console.log(`${MSG["display-bet"]}${userBet}`);
}

// Balance

function displayBalanceMenu(userBalance) {
  let running = true;
  console.clear();

  while (running) {
    let userSelection = getBalanceSelection();

    switch (userSelection) {
      case "balance":
        console.log(`${MSG["display-balance"]}${userBalance}`);
        wait(3000);
        console.clear();
        break;
      case "deposit":
        userBalance = depositMoney(userBalance);
        break;
      case "menu":
        running = false;
        break;
    }
  }
  return userBalance;
}

function getBalanceSelection() {
  const VALID_INPUTS = MSG["balance-inputs"];
  const PROMPT = MSG["balance-questions"];

  displayBanner(true);
  let userSelection = rlSync.question(PROMPT.ask);

  while (checkValidInput(userSelection.toLowerCase(), VALID_INPUTS)) {
    displayBanner(true);
    userSelection = rlSync.question(`${userSelection} ${PROMPT.retry}`);
  }

  return getValidInput(userSelection.toLowerCase(), VALID_INPUTS);
}

function getPlayerBet(userBalance) {
  const PROMPT = MSG["bet-questions"];
  displayBanner(true);
  let userBet = rlSync.question(PROMPT.ask);

  while (checkValidBet(userBalance, userBet)) {
    displayBanner(true);
    if (isNaN(Number(userBet))) {
      userBet = rlSync.question(
        `Invalid Input!\n${userBet} ${PROMPT.invalid}${userBalance}\n${PROMPT.trail}`,
      );
    } else {
      userBet = rlSync.question(
        `Insufficient funds!\n$${userBet || 0} ${PROMPT.insufficent}${userBalance}\n${PROMPT.trail}`,
      );
    }
  }
  return userBet;
}

function depositMoney(userBalance) {
  const PROMPT = MSG["deposit-questions"];

  displayBanner(true);
  let userDeposit = rlSync.question(PROMPT.ask);

  while (checkValidDeposit(Number(userDeposit))) {
    displayBanner(true);
    userDeposit = rlSync.question(`${userDeposit} ${PROMPT.retry}`);
  }

  return (userBalance += Number(userDeposit));
}

function checkValidDeposit(userDeposit) {
  return isNaN(userDeposit) || userDeposit <= 0;
}

function checkValidBet(userBalance, userBet) {
  if (userBet === "exit") {
    return false;
  }

  userBet = Number(userBet);

  return isNaN(userBet) || userBet <= 0 || userBet > userBalance;
}

function getStartingChips() {
  return 100;
}

function makeTransaction(gameResult, playerBet) {
  switch (gameResult) {
    case "blackjack":
      return (playerBet *= 2.5);
    case "winner":
      return (playerBet *= 2);
    case "push":
      return Number(playerBet);
    case "bust":
      return -playerBet;
  }
  return playerBet;
}

// rules

function displayRulesMenu() {
  const PROMPT = MSG["rules-questions"];
  const VALID_INPUTS = MSG["rules-input"];
  let running = true;

  while (running) {
    displayRules();
    let userInput = rlSync.question(PROMPT.ask);

    while (checkValidInput(userInput, VALID_INPUTS)) {
      displayRules();
      userInput = rlSync.question(`${userInput} ${PROMPT.retry}`);
    }

    userInput = getValidInput(userInput, VALID_INPUTS);

    if (userInput === "exit") {
      running = false;
      break;
    }
  }
}

function displayRules() {
  const PROMPT = MSG["rules"];

  displayBanner(true);
  console.log(`${PROMPT.rule1}${PROMPT.rule2}${PROMPT["card-values"]}`);
}

// Utility

function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

function displayFigletText(text) {
  console.log(
    figlet.textSync(text, {
      font: "Big",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 90,
      whitespaceBreak: false,
    }),
  );
  console.log();
}
