import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/dom';
import createShip from '../Ship.js';
import createGameboard from '../GameBoard.js';
import createPlayer from '../Player.js';
import '../main.js';

jest.spyOn(global.Math, 'random').mockReturnValue(0.5);

describe('Game Logic', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    global.Math.random.mockRestore();
  });

  test('createShip', () => {
    const ship = createShip(3);
    expect(ship.length).toBe(3);
    expect(ship.hits).toBe(0);
    expect(ship.isSunk()).toBe(false);

    ship.hit();
    expect(ship.hits).toBe(1);
    expect(ship.isSunk()).toBe(false);

    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  test('renderBoard', () => {
    const board = Array(10).fill(null).map(() => Array(10).fill(null));
    renderBoard(board, 'test-container', true);
    const container = screen.getByTestId('test-container');
    expect(container.children.length).toBe(100); // 10x10 board
  });

  test('placeShips', () => {
    const gameboard = createGameboard();
    placeShips(gameboard);
    const ships = gameboard.board.flat().filter(cell => cell !== null);
    expect(ships.length).toBe(5);
  });

  test('computerPlay', () => {
    const playerGameboard = createGameboard();
    const computerGameboard = createGameboard();
    const player = createPlayer(playerGameboard);
    const computer = createPlayer(computerGameboard, 'intermediate');

    playerGameboard.placeShip(createShip(3), 0, 0, true);

    jest.spyOn(computer, 'takeTurn').mockReturnValue({ row: 1, col: 1, result: true });

    computerPlay();

    expect(computer.takeTurn).toHaveBeenCalledWith(playerGameboard);
    expect(playerGameboard.board[1][1]).toBeInstanceOf(Object);
  });

  test('playerClick', async () => {
    const playerGameboard = createGameboard();
    const computerGameboard = createGameboard();
    const player = createPlayer(playerGameboard);
    const computer = createPlayer(computerGameboard, 'intermediate');

    jest.spyOn(computerGameboard, 'receiveAttack').mockReturnValue(true);

    renderBoard(playerGameboard.board, 'player-board', true);
    playerGameboard.placeShip(createShip(3), 0, 0, true);

    const cell = screen.getByTestId('player-board').querySelector('.cell');
    fireEvent.click(cell);

    await waitFor(() => {
      expect(computerGameboard.receiveAttack).toHaveBeenCalled();
      expect(cell.classList).toContain('cell-attacked');
    });
  });

  test('initGame', () => {
    initGame();
    expect(playerGameboard).toBeDefined();
    expect(computerGameboard).toBeDefined();
    expect(player).toBeDefined();
    expect(computer).toBeDefined();
    expect(turnCounter).toBe(0);
  });

  test('updateCounters', () => {
    console.log = jest.fn();
    updateCounters();
    expect(console.log).toHaveBeenCalledWith('Turn:', turnCounter);
  });

  test('checkGameOver', () => {
    console.log = jest.fn();

    jest.spyOn(playerGameboard, 'allShipsSunk').mockReturnValue(true);
    checkGameOver();
    expect(console.log).toHaveBeenCalledWith('Game Over');

    jest.spyOn(playerGameboard, 'allShipsSunk').mockReturnValue(false);
    jest.spyOn(computerGameboard, 'allShipsSunk').mockReturnValue(true);
    checkGameOver();
    expect(console.log).toHaveBeenCalledWith('Game Over');
  });
});

let playerGameboard;
let computerGameboard;
let player;
let computer;
let turnCounter;

function renderBoard(board, containerId, isPlayer) {
  const container = document.createElement('div');
  container.id = containerId;
  container.dataset.testid = containerId;
  document.body.appendChild(container);

  board.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      const cellElement = document.createElement('div');
      cellElement.classList.add('cell');
      cellElement.dataset.row = rowIndex;
      cellElement.dataset.col = colIndex;

      if (cell !== null) {
        cellElement.classList.add(isPlayer ? 'player-cell' : 'computer-cell');
      }

      container.appendChild(cellElement);
    });
  });
}

function computerPlay() {
  const computerTurnResult = computer.takeTurn(playerGameboard);
  console.log('Computer attacked:', computerTurnResult);
  turnCounter++;
  updateCounters();
  checkGameOver();
}

function initGame() {
  playerGameboard = createGameboard();
  computerGameboard = createGameboard();
  player = createPlayer(playerGameboard);
  computer = createPlayer(computerGameboard, 'intermediate');
  placeShips(playerGameboard);
  placeShips(computerGameboard);
  renderBoard(playerGameboard.board, 'player-board', true);
  renderBoard(computerGameboard.board, 'computer-board', false);
  turnCounter = 0;
  updateCounters();
}

function placeShips(gameboard) {
  const ships = [createShip(5), createShip(4), createShip(3), createShip(3), createShip(2)];
  ships.forEach(ship => {
    let placed = false;
    while (!placed) {
      let row = Math.floor(Math.random() * 10);
      let col = Math.floor(Math.random() * 10);
      let isVertical = Math.random() > 0.5;
      if (gameboard.canPlaceShip(ship, row, col, isVertical)) {
        gameboard.placeShip(ship, row, col, isVertical);
        placed = true;
      }
    }
  });
}

function updateCounters() {
  console.log('Turn:', turnCounter);
}

function checkGameOver() {
  if (playerGameboard.allShipsSunk() || computerGameboard.allShipsSunk()) {
    console.log('Game Over');
  }
}

function playerClick(e) {
  const cell = e.target;
  if (cell.classList.contains('cell') && !cell.classList.contains('cell-attacked')) {
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);
    const result = playerGameboard.receiveAttack(row, col);
    cell.classList.add('cell-attacked');
    if (result) {
      console.log('Player attacked:', { row, col, result });
      checkGameOver();
    } else {
      // Implement additional actions in case the player misses the attack.
    }
    setTimeout(computerPlay, 500);
  }
}

document.getElementById('player-board').addEventListener('click', playerClick);

initGame();
