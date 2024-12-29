import rlSync from "readline-sync";

main();

function main() {
  let grid = createGrid();

  let userInput = getPlayerSelection(grid);
  grid = changeGrid(grid, userInput, true);
  displayGameGrid(grid);

  let cpuInput = getCpuSelection(grid);
  grid = changeGrid(grid, cpuInput);
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
      return Array(gridSize).fill(" ");
    });
}

function changeGrid(grid, playerInput, usersPick = false) {
  let newGrid = grid.slice();
  if (usersPick) {
    newGrid[playerInput[0]][playerInput[1]] = "X";
  } else {
    newGrid[playerInput[0]][[playerInput[1]]] = "O";
  }

  return newGrid;
}

function getPlayerSelection(grid) {
  let userInput = rlSync.question("Enter something:\n");
  let gridCorrdinates = getMapSelection(userInput);

  if (checkIfSelectionIsUsed(grid, gridCorrdinates)) {
    userInput = rlSync.question("Please re-enter a new input:\n");
  }

  return gridCorrdinates;
}

function getCpuSelection(grid) {
  let cpuCorredinates = getMapSelection(getRandomNumber());

  if (checkIfSelectionIsUsed(grid, cpuCorredinates)) {
    cpuCorredinates = getMapSelection(getRandomNumber());
  }

  return cpuCorredinates;
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

function getRandomNumber() {
  let minNumber = 1;
  let maxNumber = 9;
  return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}

function checkIfSelectionIsUsed(grid, corr) {
  if (["X", "O"].includes(grid[corr[0]][corr[1]])) {
    return true;
  }

  return false;
}

function checkThreeInRow(grid) { }

function checkThreeWins() {
  // Verify for player with 3 wins
}
