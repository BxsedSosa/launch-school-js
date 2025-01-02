import rlSync from "readline-sync";

main();

function main() {
  let running = true;
  let scores = zeroOutScore();

  while (running) {
    let roundResult = gameRoundLoop(running, scores);
    scores = incrementScore(scores, roundResult[0]);

    if (checkThreeWins(scores["playerOne"], scores["cpu"])) {
      let playerRetry = getPlayerRetry(roundResult[1], scores);

      if (playerRetry) {
        scores = zeroOutScore();
      } else {
        running = false;
      }
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
      return [playerResult[1], grid];
    }

    if (checkForTie(grid)) {
      runStatus = false;
      break;
    }

    playersTurn = !playersTurn;
  }

  return ["tie", grid];
}

function selectionSwitch(grid, scores, playersTurn) {
  return playersTurn
    ? getPlayerSelection(grid, scores)
    : getCpuSelection(grid, scores);
}

function displayGameGrid(grid, scores) {
  console.clear();
  let scoreBoard = `Player One: ${scores["playerOne"]} | Ties: ${scores["ties"]} | Cpu: ${scores["cpu"]}\n`;
  let middleLen = Math.floor(scoreBoard.length / 2);
  let spacer = "---------";
  let display = grid.map((layer) => {
    return layer.join(" | ");
  });

  console.log(scoreBoard);
  display.forEach((gridRow, idx) => {
    console.log(
      `${" ".repeat(middleLen - Math.floor(gridRow.length / 2))}${gridRow}`,
    );
    if (idx + 1 !== display.length) {
      console.log(
        `${" ".repeat(middleLen - Math.floor(spacer.length / 2))}${spacer}`,
      );
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
}

function getPlayerSelection(grid, scores) {
  displayGameGrid(grid, scores);
  let userInput = rlSync.question("\nEnter something:\n");
  let gridCorrdinates = getMapSelection(userInput);

  while (
    checkIfSelectionIsValid(userInput) ||
    checkIfSelectionIsUsed(grid, gridCorrdinates)
  ) {
    displayGameGrid(grid, scores);
    if (checkIfSelectionIsValid(userInput)) {
      userInput = rlSync.question("\nPlease enter a valid input:\n");
    } else {
      userInput = rlSync.question("\nPlease enter a input that isn't used:\n");
    }
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

function getPlayerRetry(grid, scores) {
  displayGameGrid(grid, scores);
  let userInput = rlSync.question("\nWould you like to play again?\n");

  while (checkIfValidRetryInput(userInput.toLowerCase())) {
    displayGameGrid(grid, scores);
    userInput = rlSync.question("\nPlease enter a valid input:\n");
  }

  return getRestart(userInput.toLowerCase());
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

function getRestart(userInput) {
  let yesInputs = ["1", "y", "yes"];

  return yesInputs.includes(userInput);
}

function checkIfSelectionIsValid(input) {
  return !Array(9)
    .fill()
    .map((_, idx) => String(idx + 1))
    .includes(input);
}

function checkIfValidRetryInput(input) {
  let validInput = ["y", "n", "1", "2", "yes", "no"];

  return !validInput.includes(input);
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
  let diagonalLineTwo = [grid[0][2], grid[1][1], grid[2][0]];
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

function checkThreeWins(player1Score, cpuScore) {
  if (player1Score > 2) {
    return "player 1";
  }

  if (cpuScore > 2) {
    return "cpu";
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

function zeroOutScore() {
  return {
    playerOne: 0,
    cpu: 0,
    ties: 0,
  };
}
