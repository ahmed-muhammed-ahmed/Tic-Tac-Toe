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
