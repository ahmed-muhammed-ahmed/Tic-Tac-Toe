"use strict";
const startGameBtn = document.querySelector(".start-game");
const container = document.querySelector(".container");
const form = document.querySelector("form");
const playerOneInput = document.querySelector("#player--1");
const playerTwoInput = document.querySelector("#player--2");
const playerOne = document.querySelector(".player-one");
const playerTwo = document.querySelector(".player-two");
const playerTurn = document.querySelector(".display-winner");

startGameBtn.addEventListener("click", function (e) {
  e.preventDefault();
  container.style.display = "grid";
  form.style.display = "none";
  playerOne.textContent = playerOneInput.value;
  playerTwo.textContent = playerTwoInput.value;
  playerTurn.textContent = `${playerOneInput.value}'s turn`;
});

function createPlayer(name, marker) {
  return { name, marker };
}
const player1 = createPlayer("A", "X");
const player2 = createPlayer("B", "O");
let currentPlayer;
const gameBoard = {
  marker: ["", "", "", "", "", "", "", "", ""],
};

function displayBoard() {
  console.log(gameBoard.marker.slice(0, 3).join(" | "));
  console.log("---------");
  console.log(gameBoard.marker.slice(3, 6).join(" | "));
  console.log("---------");
  console.log(gameBoard.marker.slice(6).join(" | "));
}

function isBoardFull() {
  return !gameBoard.marker.includes("");
}

function game() {
  let gameOver = false;
  let position;
  // displayBoard();

  while (!gameOver) {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    console.log(`It's ${currentPlayer.name}'s turn`);
    position = parseInt(prompt("Enter position on the board (0-8):"));

    if (position >= 0 && position <= 8 && gameBoard.marker[position] === "") {
      gameBoard.marker[position] = currentPlayer.marker;
      //   displayBoard();
      if (checkWinner(currentPlayer)) {
        console.log(`${currentPlayer.name} wins!`);
        gameOver = true;
      } else if (isBoardFull()) {
        console.log("It's a tie!");
        gameOver = true;
      }
    } else {
      console.log("Invalid position or position already taken. Try again.");
    }
  }
}

function checkWinner(player) {
  const marker = player.marker;

  // Rows
  if (
    (gameBoard.marker[0] === marker &&
      gameBoard.marker[1] === marker &&
      gameBoard.marker[2] === marker) ||
    (gameBoard.marker[3] === marker &&
      gameBoard.marker[4] === marker &&
      gameBoard.marker[5] === marker) ||
    (gameBoard.marker[6] === marker &&
      gameBoard.marker[7] === marker &&
      gameBoard.marker[8] === marker)
  ) {
    return true;
  }

  // Columns
  if (
    (gameBoard.marker[0] === marker &&
      gameBoard.marker[3] === marker &&
      gameBoard.marker[6] === marker) ||
    (gameBoard.marker[1] === marker &&
      gameBoard.marker[4] === marker &&
      gameBoard.marker[7] === marker) ||
    (gameBoard.marker[2] === marker &&
      gameBoard.marker[5] === marker &&
      gameBoard.marker[8] === marker)
  ) {
    return true;
  }

  // Diagonals
  if (
    (gameBoard.marker[0] === marker &&
      gameBoard.marker[4] === marker &&
      gameBoard.marker[8] === marker) ||
    (gameBoard.marker[2] === marker &&
      gameBoard.marker[4] === marker &&
      gameBoard.marker[6] === marker)
  ) {
    return true;
  }

  return false;
}

game();
console.log(gameBoard.marker);
