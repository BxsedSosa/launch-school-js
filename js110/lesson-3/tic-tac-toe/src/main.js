import rlSync from "readline-sync";
import MSG from "../config/text.json" assert { type: "json" };

// displayTutorialMap();
// setTimeout(main, 8000);

function main() {
  let running = true;
  let scores = zeroOutScore();

  while (running) {
    let roundResult = gameRoundLoop(running, scores);
    scores = incrementScore(scores, roundResult[0]);
    let winner = checkThreeWins(scores["playerOne"], scores["cpu"]);

    if (winner) {
      let playerRetry = getPlayerRetry(roundResult[1], scores, winner);

      if (playerRetry) {
        scores = zeroOutScore();
      } else {
        running = false;
      }
    }
  }
  console.clear();
}

function gameRoundLoop(runStatus, scores) {
  let grid = createGrid();
  let playersTurn = true;

  while (runStatus) {
    console.clear();
    let playerResult = selectionSwitch(grid, scores, playersTurn);

    if (playerResult[0] === false) {
      runStatus = false;
      return [playerResult[1], grid];
    }

    if (checkForTie(grid)) {
      runStatus = false;
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

function getPlayerSelection(grid, scores) {
  let usersQuestion = MSG["selection"]["ask"];

  displayGameGrid(grid, scores);
  let userInput = rlSync.question(usersQuestion);
  let gridCorrdinates = getMapSelection(userInput);

  while (checkPlayerSelection(userInput, grid, gridCorrdinates)) {
    clearedDisplayGame(grid, scores);
    userInput = getPlayerReselection(userInput);
    gridCorrdinates = getMapSelection(userInput);
  }

  changeGrid(grid, gridCorrdinates, true);

  return [!checkRoundWinner(grid), "X"];
}

function getPlayerReselection(userInput) {
  let retryMsg = {
    invalid: `\n${userInput} ${MSG["selection"]["retry"]["valid"]}`,
    used: `\n${userInput} ${MSG["selection"]["retry"]["used"]}`,
  };

  if (checkIfSelectionIsValid(userInput)) {
    userInput = rlSync.question(retryMsg.invalid);
  } else {
    userInput = rlSync.question(retryMsg.used);
  }

  return userInput;
}

function getCpuSelection(grid, scores) {
  let cpuCorredinates;
  displayGameGrid(grid, scores);
  if (checkXCount(grid, 2)) {
    cpuCorredinates = defensiveCpuMove(grid);
  } else {
    cpuCorredinates = getMapSelection(getRandomNumber());
  }

  while (checkIfSelectionIsUsed(grid, cpuCorredinates)) {
    cpuCorredinates = getMapSelection(getRandomNumber());
  }

  changeGrid(grid, cpuCorredinates);

  return [!checkRoundWinner(grid), "O"];
}

function getPlayerRetry(grid, scores, winner) {
  let msg = {
    winner: `${MSG["game-winner"]} ${winner}`,
    ask: `${MSG["restart"]["ask"]}`,
  };

  clearedDisplayGame(grid, scores);
  console.log(msg.winner);
  let userInput = rlSync.question(msg.ask);

  while (checkIfValidRetryInput(userInput.toLowerCase())) {
    let invalid = `\n${userInput} ${MSG["restart"]["retry"]}`;

    clearedDisplayGame(grid, scores);
    userInput = rlSync.question(invalid);
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

function checkPlayerSelection(userInput, grid, gridCorrdinates) {
  return (
    checkIfSelectionIsValid(userInput) ||
    checkIfSelectionIsUsed(grid, gridCorrdinates)
  );
}

function checkIfValidRetryInput(input) {
  let validInput = ["y", "n", "1", "2", "yes", "no"];

  return !validInput.includes(input);
}

function checkIfSelectionIsUsed(grid, corr) {
  let playerSelection = grid[corr[0]][corr[1]];

  return ["X", "O"].includes(playerSelection);
}

let grid = createGrid();
grid[0][0] = "X";
grid[0][1] = "X";

getDefensiveMove(grid, 2);

function getDefensiveMove(grid) {
  let rowChecks = grid.map((row) => {
    return countElements(row)["X"] === 2;
  });

  let rowDefend = rowChecks.findIndex((element) => element === true);

  return;

  // if (rowChecks.includes(true) {
  //   for (let i = 0; i < rowChecks.length; i++) {
  //     if (rowChecks[i] === "true")
  //   }
  // };
  // )
}

function checkCountInRow(grid, countWanted) {
  return grid
    .map((row) => {
      return Object.values(countElements(row)).includes(countWanted);
    })
    .includes(true);
}

function checkCountInColumn(grid, countWanted) {
  let columns = grid.map((_, idx, arr) => {
    return [arr[0][idx], arr[1][idx], arr[2][idx]];
  });

  return checkCountInRow(columns, countWanted);
}

function checkCountInDiagonal(grid, countWanted) {
  let diagonalLineOne = [grid[0][0], grid[1][1], grid[2][2]];
  let diagonalLineTwo = [grid[0][2], grid[1][1], grid[2][0]];
  let diagonalRow = [diagonalLineOne, diagonalLineTwo];

  return checkCountInRow(diagonalRow, countWanted);
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
    checkCountInRow(grid, 3),
    checkCountInColumn(grid, 3),
    checkCountInDiagonal(grid, 3),
  ];

  return checks.includes(true);
}

function checkThreeWins(player1Score, cpuScore) {
  if (player1Score > 2) {
    return "Player One";
  }

  if (cpuScore > 2) {
    return "Cpu";
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

function createGrid() {
  let gridSize = 3;

  return Array(gridSize)
    .fill()
    .map(() => {
      return Array(gridSize).fill(" ");
    });
}

function createMapGrid() {
  let grid = createGrid();
  let counter = 0;

  return grid.map((row) => {
    return row.map(() => {
      return (counter += 1);
    });
  });
}

function changeGrid(grid, playerInput, usersPick = false) {
  if (usersPick) {
    grid[playerInput[0]][playerInput[1]] = "X";
  } else {
    grid[playerInput[0]][playerInput[1]] = "O";
  }
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

function zeroOutScore() {
  return {
    playerOne: 0,
    cpu: 0,
    ties: 0,
  };
}

function clearedDisplayGame(grid, scores) {
  console.clear();
  displayGameGrid(grid, scores);
}

function displayGameGrid(grid, scores) {
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

function displayTutorialMap() {
  console.clear();
  console.log(MSG["welcome"]);
  setTimeout(() => {
    clearedDisplayGame(createMapGrid(), zeroOutScore());
    console.log(MSG["tutorial"]);
  }, 3000);
}

function checkIfPlayerWins() {
  let checks = [
    checkCountInRow(grid, 2),
    checkCountInColumn(grid, 2),
    checkCountInDiagonal(grid, 2),
  ];

  return checks.includes(true);
}

function defensiveCpuMove(grid) {
  checkXcount(grid, 2);
}

function offensiveCpuMove() { }
