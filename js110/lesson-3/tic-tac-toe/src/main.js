import rlSync from "readline-sync";

main();

function main() {
  let running = true;
  let grid = createGrid();

  while (running) {
    let userInput = getPlayerSelection(grid);
    grid = changeGrid(grid, userInput, true);
    displayGameGrid(grid);

    let cpuInput = getCpuSelection(grid);
    grid = changeGrid(grid, cpuInput);
    displayGameGrid(grid);
  }
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
    newGrid[playerInput[0]][playerInput[1]] = "O";
  }

  return newGrid;
}

function getPlayerSelection(grid) {
  let userInput = rlSync.question("Enter something:\n");
  let gridCorrdinates = getMapSelection(userInput);

  while (checkIfSelectionIsUsed(grid, gridCorrdinates)) {
    userInput = rlSync.question("Please re-enter a new input:\n");
    gridCorrdinates = getMapSelection(userInput);
  }

  return gridCorrdinates;
}

function getCpuSelection(grid) {
  let cpuCorredinates = getMapSelection(getRandomNumber());

  while (checkIfSelectionIsUsed(grid, cpuCorredinates)) {
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
  let playerSelection = grid[corr[0]][corr[1]];

  return ["X", "O"].includes(playerSelection);
}

function checkThreeInRow(grid) {
  for (let row of grid) {
    if (Object.values(countElements(row)).includes(3)) {
      return true;
    }
  }
  return false;
}

function checkThreeInColumn(grid) {
  let columns = grid.map((_, idx, arr) => {
    return [arr[0][idx], arr[1][idx], arr[2][[idx]]];
  });

  return checkThreeInRow(columns);
}

function checkThreeInDiagonal(grid) {
  let diagonalRow = [];

  diagonalRow.push([grid[0][0], grid[1][1], grid[2][2]]);
  diagonalRow.push([grid[0][2], grid[1][1], grid[2][0]]);

  return checkThreeInRow(diagonalRow);
}

function countElements(row) {
  let counter = {
    X: 0,
    O: 0,
  };

  for (let element of row) {
    if (element === "X") {
      counter["X"] += 1;
    } else if (element === "O") {
      counter["O"] += 1;
    }
  }

  return counter;
}

function checkThreeWins(player1Score, player2Score) {
  if (player1Score > 2) {
    return "player 1";
  }

  if (player2Score > 2) {
    return "player 2";
  }

  return "";
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
