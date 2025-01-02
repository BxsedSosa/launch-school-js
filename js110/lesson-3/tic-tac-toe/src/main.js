import rlSync from "readline-sync";

main();

function main() {
  let running = true;
  let scores = {
    playerOne: 0,
    cpu: 0,
    ties: 0,
  };

  while (running) {
    let roundResult = gameRoundLoop(running, scores);

    scores = incrementScore(scores, roundResult);

    if (Object.values(scores).includes(3)) {
      running = false;
    }
  }
}

function gameRoundLoop(runStatus, scores) {
  let grid = createGrid();
  let playersTurn = true;

  while (runStatus) {
    let playerResult = selectionSwitch(grid, scores, playersTurn);

    if (playerResult[0] === false) {
      runStatus = false;
      return playerResult[1];
    }

    if (checkForTie(grid)) {
      runStatus = false;
      break;
    }

    playersTurn = !playersTurn;
  }

  return "tie";
}

function selectionSwitch(grid, scores, playersTurn = false) {
  if (playersTurn) {
    return getPlayerSelection(grid, scores);
  } else {
    return getCpuSelection(grid, scores);
  }
}

function displayGameGrid(grid, scores) {
  let spacer = "---------";
  let display = grid.map((layer) => {
    return layer.join(" | ");
  });

  console.log(scores);
  display.forEach((gridRow, idx) => {
    console.log(gridRow);
    if (idx + 1 !== display.length) {
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
  if (usersPick) {
    grid[playerInput[0]][playerInput[1]] = "X";
  } else {
    grid[playerInput[0]][playerInput[1]] = "O";
  }

  displayGameGrid(grid);
}

function getPlayerSelection(grid, scores) {
  displayGameGrid(grid, scores);
  let userInput = rlSync.question("Enter something:\n");
  let gridCorrdinates = getMapSelection(userInput);

  while (checkIfSelectionIsUsed(grid, gridCorrdinates)) {
    userInput = rlSync.question("Please re-enter a new input:\n");
    gridCorrdinates = getMapSelection(userInput);
  }

  changeGrid(grid, gridCorrdinates, true);

  return [!checkRoundWinner(grid), "X"];
}

function getCpuSelection(grid, scores) {
  displayGameGrid(grid, scores);
  let cpuCorredinates = getMapSelection(getRandomNumber());

  while (checkIfSelectionIsUsed(grid, cpuCorredinates)) {
    cpuCorredinates = getMapSelection(getRandomNumber());
  }

  changeGrid(grid, cpuCorredinates);

  return [!checkRoundWinner(grid), "O"];
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
  return grid
    .map((row) => {
      return Object.values(countElements(row)).includes(3);
    })
    .includes(true);
}

function checkThreeInColumn(grid) {
  let columns = grid.map((_, idx, arr) => {
    return [arr[0][idx], arr[1][idx], arr[2][idx]];
  });

  return checkThreeInRow(columns);
}

function checkThreeInDiagonal(grid) {
  let diagonalLineOne = [grid[0][0], grid[1][1], grid[2][2]];
  let diagonalLineTwo = [grid[0][2], grid[1][1], grid[2][1]];
  let diagonalRow = [diagonalLineOne, diagonalLineTwo];

  return checkThreeInRow(diagonalRow);
}

function checkForTie(grid) {
  return grid
    .map((row) => {
      return row.includes(" ");
    })
    .every((element) => element === false);
}

function checkRoundWinner(grid) {
  let checks = [
    checkThreeInRow(grid),
    checkThreeInDiagonal(grid),
    checkThreeInColumn(grid),
  ];

  return checks.includes(true);
}

function countElements(row) {
  let counter = {
    X: 0,
    O: 0,
  };

  for (let ele of row) {
    if (ele === "X") {
      counter["X"] += 1;
    } else if (ele === "O") {
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

function incrementScore(scores, roundResult) {
  let newScores = {
    ...scores,
  };

  if (roundResult === "X") {
    newScores["playerOne"] += 1;
  } else if (roundResult === "O") {
    newScores["cpu"] += 1;
  } else {
    newScores["ties"] += 1;
  }

  return newScores;
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
