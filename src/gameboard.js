export function createGameboard() {
  const board = Array(10).fill(null).map(() => Array(10).fill(null));
  const ships = [];

  function canPlaceShip(ship, row, col, isVertical) {
    if (isVertical) {
      if (row + ship.dataset.length > 10) return false;
      for (let i = 0; i < ship.dataset.length; i++) {
        if (board[row + i][col] !== null) return false;
      }
    } else {
      if (col + ship.dataset.length > 10) return false;
      for (let i = 0; i < ship.dataset.length; i++) {
        if (board[row][col + i] !== null) return false;
      }
    }
    return true;
  }

  function placeShip(ship, row, col, isVertical) {
    if (!canPlaceShip(ship, row, col, isVertical)) {
      throw new Error("Cannot place ship here.");
    }
    if (isVertical) {
      for (let i = 0; i < ship.dataset.length; i++) {
        board[row + i][col] = ship;
        ships.push({ ship, row: row + i, col });
      }
    } else {
      for (let i = 0; i < ship.dataset.length; i++) {
        board[row][col + i] = ship;
        ships.push({ ship, row, col: col + i });
      }
    }
  }

  return {
    board,
    canPlaceShip,
    placeShip,
  };
}
