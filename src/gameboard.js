import { createShip } from './ship';
import shipFactory from './shipFactory.js';
import { createShip } from './ship';

export function createGameboard() {
  const board = Array(10).fill(null).map(() => Array(10).fill(null));
  const ships = [];

  function canPlaceShip(ship, row, col, isVertical) {
    if (isVertical) {
      if (row + ship.size > 10) return false;
      for (let i = 0; i < ship.size; i++) {
        if (board[row + i][col] !== null) return false;
      }
    } else {
      if (col + ship.size > 10) return false;
      for (let i = 0; i < ship.size; i++) {
        if (board[row][col + i] !== null) return false;
      }
    }
    return true;
  }

  function placeShip(shipData, row, col, isVertical) {
    const ship = createShip(shipData);

    if (!canPlaceShip(ship, row, col, isVertical)) {
      throw new Error("Cannot place ship here.");
    }

    if (isVertical) {
      for (let i = 0; i < ship.size; i++) {
        board[row + i][col] = ship;
        ships.push({ ship, row: row + i, col });
      }
    } else {
      for (let i = 0; i < ship.size; i++) {
        board[row][col + i] = ship;
        ships.push({ ship, row, col: col + i });
      }
    }
  }

  function receiveAttack(row, col) {
    const target = board[row][col];
    if (target === null) {
      // Record missed attack
      // You can add your missed attack handling logic here
    } else {
      target.hit();
    }
  }

  function allShipsSunk() {
    return ships.every(shipInfo => shipInfo.ship.isSunk());
  }

  return {
    board,
    canPlaceShip,
    placeShip,
    receiveAttack,
    allShipsSunk,
  };
}
