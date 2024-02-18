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
  const playerName = name;
  const playerMarker = marker;
  return { playerName, playerMarker };
}
const player1 = createPlayer("A", "X");
const player2 = createPlayer("B", "O");
let gameOver = false;
let currentPlayer = player1.playerName;
console.log(currentPlayer);

const gameBoard = {
  marker: ["X", "O", "X", "O", "X", "O", "X", "O", "X"],
};
