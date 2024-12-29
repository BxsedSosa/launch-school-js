import rlSync from "readline-sync";

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
  let gridMap = createGridMap();

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

function countElements(row) {
  let counts = {};
}

let grid = createGrid();

grid[0][0] = "X";
grid[0][1] = "O";
grid[0][2] = "X";
grid[1][0] = "X";
grid[1][1] = "X";
grid[1][2] = "X";

console.log(grid);
console.log(checkThreeInRow(grid));

function checkThreeWins() {
  // Verify for player with 3 wins
}

function createGridMap() {
  let keys = Array(9)
    .fill()
    .map((_, idx) => idx + 1);

  let values = Array(3)
    .fill()
    .map((_, idx) => idx);

  values = values
    .map((num) => {
      return values.map((num2) => [num, num2]);
    })
    .flat();

  let entry = keys.map((ele, idx) => {
    return [ele, values[idx]];
  });

  return Object.fromEntries(entry);
}
