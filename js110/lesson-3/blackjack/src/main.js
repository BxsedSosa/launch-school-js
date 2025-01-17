import { question } from "readline-sync";
import figlet from "figlet";
import MSG from "../config/text.json" assert { type: "json" };

main();

// Main

function main() {
  let running = true;
  let userBalance = getStartingChips();
  let cardDeck = shuffleDeck();

  while (running) {
    let playerSelection = getMenuInput();

    switch (playerSelection) {
      case "bet":
        let userBet = getPlayerBet(userBalance);
        let gameResult = gameLoop(cardDeck, userBet);
        userBalance += makeTransaction(gameResult, userBet);
        break;
      case "balance":
        console.log(`\nYour balance is: $${userBalance}`);
        wait(3000);
        break;
      case "rules":
        console.log("rules");
        wait(3000);
        break;
      case "exit":
        console.clear();
        running = false;
        break;
    }
  }
}

// Game loop

function gameLoop(deck, userBet) {
  let dealerResult, playerResult;
  let playerHand = [];
  let dealerHand = [];

  startHand(deck, playerHand, dealerHand);
  playerResult = checkPlayerBust(
    playerTurn(deck, playerHand, dealerHand),
    playerHand,
  );

  if (playerResult.result && !playerResult.blackjack) {
    dealerResult = checkPlayerBust(
      dealersTurn(deck, dealerHand, playerHand),
      dealerHand,
    );
  }
  displayCards(playerHand, dealerHand, false, true);
  wait(5000);

  return determineWinner(playerResult, dealerResult);
}

function playerTurn(deck, playerHand, dealerHand) {
  let playerScore = determineValues(getValues(playerHand));

  while (playerScore < 21) {
    displayCards(playerHand, dealerHand, true, true);
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
    displayCards(playerHand, dealerHand, false, true);
    giveCard(deck, dealerHand);
    wait(3000);
    dealerScore = determineValues(getValues(dealerHand));
  }

  return dealerScore;
}

function checkPlayerBust(handValue, hand) {
  if (handValue <= 21) {
    return {
      result: true,
      value: handValue,
      blackjack: checkBlackJack(hand),
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

function checkBlackJack(hand) {
  let values = getValues(hand);
  let handValue = determineValues(values);

  return hand.length === 2 && !values.includes(10) && handValue === 21;
}

function determineWinner(playerResult, dealerResult) {
  if (dealerResult === undefined) {
    if (playerResult.blackjack) {
      return "blackjack";
    } else if (playerResult.result) {
      return "winner";
    } else {
      return "bust";
    }
  }

  if (playerResult.result && dealerResult.result) {
    if (playerResult.value > dealerResult.value) {
      return "winner";
    } else {
      return "bust";
    }
  }
}

// Menu

function getMenuInput() {
  const VALID_INPUTS = MSG["menu-inputs"];
  const PROMPT = MSG["menu-questions"];

  console.clear();
  displayBanner();
  let userInput = question(PROMPT.ask);

  while (checkValidInput(userInput.toLowerCase(), VALID_INPUTS)) {
    console.clear();
    displayBanner();
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

  displayCards(playerHand, dealersHand, true, true);
  let playerSelection = question(PROMPT.ask);

  while (checkValidInput(playerSelection.toLowerCase(), VALID_INPUTS)) {
    displayCards(playerHand, dealersHand, true, true);
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

function displayBanner() {
  displayFigletText("Blackjack");
}

function displayCards(playerHand, dealerHand, isHidden, clearConsole = false) {
  if (clearConsole) {
    console.clear();
  }
  displayBanner();
  getCardDisplay(dealerHand, true, isHidden);
  getCardDisplay(playerHand);
}

function getCardDisplay(hand, isDealer = false, isStart = false) {
  let cardDisplay;
  let suits = getSuits(hand);
  let values = getValues(hand);

  if (isDealer && isStart) {
    displayScore(values.slice(0, 1), true);
    console.log("Dealer Hand: ");
    suits[1] = values[1] = "?";
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

// Chips

function getPlayerBet(userBalance) {
  console.clear();
  displayBanner();
  let userBet = question("please enter amount:\n\n>>> ");

  while (checkValidBet(userBalance, Number(userBet))) {
    console.clear();
    displayBanner();
    if (isNaN(Number(userBet))) {
      userBet = question(
        `Invalid Input!\n${userBet} is not a valid Input!\nAccount balance: $${userBalance}\n\nPlease enter amount:\n\n>>> `,
      );
    } else {
      userBet = question(
        `Insufficient funds!\n$${userBet || 0} is larger than your account balance: $${userBalance}\nPlease enter amount:\n\n>>> `,
      );
    }
  }
  return userBet;
}

function checkValidBet(userBalance, userBet) {
  return isNaN(userBet) || userBet === 0 || userBet > userBalance;
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
    case "bust":
      return -playerBet;
  }
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
