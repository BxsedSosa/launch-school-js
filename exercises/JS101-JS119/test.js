function isItemAvailable(id, transactions) {
  sum = 0;

  transactionsFor(id, transactions).forEach((element) => {
    if (element["movement"] === "in") {
      sum += element["quantity"];
    } else {
      sum -= element["quantity"];
    }
  });

  return sum > 0;
}

function transactionsFor(id, transactions) {
  return transactions.filter((transaction) => transaction["id"] === id);
}

let transactions = [
  { id: 101, movement: "in", quantity: 5 },
  { id: 105, movement: "in", quantity: 10 },
  { id: 102, movement: "out", quantity: 17 },
  { id: 101, movement: "in", quantity: 12 },
  { id: 103, movement: "out", quantity: 20 },
  { id: 102, movement: "out", quantity: 15 },
  { id: 105, movement: "in", quantity: 25 },
  { id: 101, movement: "out", quantity: 18 },
  { id: 102, movement: "in", quantity: 22 },
  { id: 103, movement: "out", quantity: 15 },
];

console.log(isItemAvailable(101, transactions));
console.log(isItemAvailable(103, transactions)); // false
console.log(isItemAvailable(105, transactions)); // true
