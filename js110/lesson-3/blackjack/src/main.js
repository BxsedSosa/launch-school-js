import rlSync from "readline-sync";
// import MSG from "../config/text.json" assert { type: "json" };

function main() {
  let deck = createDeck();
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

function shuffleDeck(deck) {
  let newDeck = [...deck];

  return newDeck.sort(() => Math.random() - 0.5);
}

function getChips() {
  return 100;
}
