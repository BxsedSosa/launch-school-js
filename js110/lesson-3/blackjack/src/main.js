import rlSync from "readline-sync";
// import MSG from "../config/text.json" assert { type: "json" };

main();

function main() {
  let deck = shuffleDeck();
  let playerChips = getChips();
  let playerHand = [];
  let dealerHand = [];

  startHand(deck, playerHand, dealerHand);
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

  if (player) {
    console.log("Player Hand: ");
  } else {
    console.log("Dealer Hand: ");
  }

  let display = Array(suits.length)
    .fill()
    .map((_, idx) => {
      return createTextCard(suits[idx], values[idx]);
    })
    .map((string) => string.split("\n"));

  let organized = display[0].map((_, cardIdx) => {
    return display.map((_, displayIdx, arr) => {
      return arr[displayIdx][cardIdx];
    });
  });

  for (let line of organized) {
    console.log(line.join("  "));
  }
}

function createTextCard(suit, value) {
  if (value === 10) {
    return ` ------ \n|${suit}     |\n|  ${value}  |\n|      |\n ------ `;
  }
  return ` ------ \n|${suit}     |\n|   ${value}  |\n|      |\n ------ `;
}

displayCards([
  ["D", 10],
  ["C", 5],
  ["H", 5],
  ["S", 3],
]);
