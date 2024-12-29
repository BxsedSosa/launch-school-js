import rl_sync from "readline-sync";

main();

function main() {
  let grid = createGrid();
  displayGameGrid(grid);
  let userInput = getPlayerSelection();
  grid = changeGrid(grid, userInput, "user");
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

function changeGrid(grid, playerInput, whichPlayer) {
  if (whichPlayer === "user") {
    grid[playerInput[0]][playerInput[1]] = "X";
    return grid;
  }

  grid[(playerInput[0], playerInput[1])] = "O";
  return grid;
}

function getPlayerSelection() {
  // Get the players grid selection
  let userInput = rl_sync.question("Enter something: \n");
  return getMapSelection(userInput);
}

function getCpuSelection() {
  // Get CPU grid selection
}

function getPlayerRetry() {
  // Check if player wants to replay
}

function getMapSelection(playerInput) {
  let gridMap = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
  };

  return gridMap[playerInput];
}

function checkThreeInRow() {
  // Verify for winner after each players turn
}

function checkThreeWins() {
  // Verify for player with 3 wins
}
