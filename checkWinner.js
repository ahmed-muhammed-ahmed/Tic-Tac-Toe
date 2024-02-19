export default function checkWinner(player, gameBoard) {
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
