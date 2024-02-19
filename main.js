"use strict";
import createPlayer from "./createPlayer.js";
import checkWinner from "./checkWinner.js";
import isBoardFull from "./isBoardFull.js";

const startGameBtn = document.querySelector(".start-game");
const container = document.querySelector(".container");
const form = document.querySelector("form");
const playerOneInput = document.querySelector("#player--1");
const playerTwoInput = document.querySelector("#player--2");
const playerOne = document.querySelector(".player-one");
const playerTwo = document.querySelector(".player-two");
const playerTurn = document.querySelector(".display-winner");
const btnMarker = document.querySelectorAll(".btn-mark");
let currentPlayer;
let player1;
let player2;

startGameBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // Creating player object
  player1 = createPlayer(playerOneInput.value, "X");
  player2 = createPlayer(playerTwoInput.value, "O");

  // Hiding form and displaying game board
  container.style.display = "grid";
  form.style.display = "none";

  // Display player name
  playerOne.textContent = playerOneInput.value;
  playerTwo.textContent = playerTwoInput.value;
  // Setting current player, player1
  currentPlayer = player1;
  playerTurn.textContent = `It's ${player1.name}'s turn`;
  // Start the game after setting up players
  startGame();
});

const gameBoard = {
  marker: ["", "", "", "", "", "", "", "", ""],
};

function startGame() {
  btnMarker.forEach(function (marker, i) {
    marker.addEventListener("click", function () {
      if (gameBoard.marker[i] === "") {
        gameBoard.marker[i] = currentPlayer.marker;
        marker.textContent = currentPlayer.marker;
        if (checkWinner(currentPlayer, gameBoard)) {
          playerTurn.textContent = `${currentPlayer.name} wins! 🏆`;
          currentPlayer = "";
        } else if (isBoardFull(gameBoard)) {
          playerTurn.textContent = "It's a Draw";
        } else {
          currentPlayer = currentPlayer === player1 ? player2 : player1;
          playerTurn.textContent = `It's ${currentPlayer.name}'s turn`;
        }
      } else {
        console.log("Invalid position or position already taken. Try again.");
      }
    });
  });
}
