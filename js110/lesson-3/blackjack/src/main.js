import rlSync from "readline-sync";
// import MSG from "../config/text.json" assert { type: "json" };

main();

function main() {
  let running = true;
  let deck = shuffleDeck();

  while (running) {
    let playerSelection = rlSync.question("hello:\n>>> ");
    deck = gameLoop(deck);

    if (playerSelection === "exit") {
      running = false;
    }
  }
}

function gameLoop(deck) {
  let playerHand = [];
  let dealerHand = [];

  if (deck.length <= 4) {
    deck = deck.concat(shuffleDeck());
  }

  startHand(deck, playerHand, dealerHand);
  displayCards(playerHand, true);
  displayCards(dealerHand);

  return deck;
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
  hand.push(deck.shift());
}

function shuffleDeck() {
  return createDeck().sort(() => Math.random() - 0.5);
}

function getChips() {
  return 100;
}

function resetDeck(deck) {
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
