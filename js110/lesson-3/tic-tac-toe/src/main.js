import rl_sync from "readline-sync";

main();

function main() {
  let grid = createGrid();
  displayGameGrid(grid);
}

function displayGameGrid(grid) {
  let spacer = "---------";
  let display = grid.map((layer) => {
    return layer.join(" | ");
  });

  display.forEach((element, idx) => {
    console.log(element);
    if (idx + 1 != display.length) {
      console.log(spacer);
    }
  });
}

function createGrid() {
  let gridSize = 3;

  return Array(gridSize)
    .fill()
    .map(() => {
      return Array(gridSize).fill("e");
    });
}

function getPlayerSelection() {
  // Get the players grid selection
}

function getCpuSelection() {
  // Get CPU grid selection
}

function getPlayerRetry() {
  // Check if player wants to replay
}

function checkThreeInRow() {
  // Verify for winner after each players turn
}

function checkThreeWins() {
  // Verify for player with 3 wins
}
