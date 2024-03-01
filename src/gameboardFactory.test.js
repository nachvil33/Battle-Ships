import { createGameboard } from './gameboardFactory';

test('createGameboard returns an object with the correct properties', () => {
  const gameboard = createGameboard();

  expect(gameboard).toHaveProperty('board');
  expect(gameboard).toHaveProperty('canPlaceShip');
  expect(gameboard).toHaveProperty('placeShip');
  expect(gameboard).toHaveProperty('receiveAttack');
  expect(gameboard).toHaveProperty('allShipsSunk');
});

test('canPlaceShip returns true for valid ship placement', () => {
  const gameboard = createGameboard();
  const ship = {
    size: 3,
  };

  const result = gameboard.canPlaceShip(ship, 0, 0, true);

  expect(result).toBe(true);
});

test('canPlaceShip returns false for invalid ship placement', () => {
  const gameboard = createGameboard();
  const ship = {
    size: 3,
  };

  gameboard.placeShip(ship, 0, 0, true);

  const result = gameboard.canPlaceShip(ship, 0, 0, true);

  expect(result).toBe(false);
});

test('receiveAttack updates board for a hit', () => {
  const gameboard = createGameboard();
  const ship = {
    size: 3,
    hit: jest.fn(),
  };

  gameboard.placeShip(ship, 0, 0, true);
  gameboard.receiveAttack(0, 0);

  expect(ship.hit).toHaveBeenCalled();
});

test('receiveAttack records missed attack on empty cell', () => {
  const gameboard = createGameboard();
  const mockShip = {
    size: 3,
    hit: jest.fn(),
  };

  gameboard.placeShip(mockShip, 0, 0, true);
  gameboard.receiveAttack(1, 1);

  expect(mockShip.hit).not.toHaveBeenCalled();
  // Add more assertions for missed attack handling if needed
});

test('allShipsSunk returns true when all ships are sunk', () => {
  const gameboard = createGameboard();
  const ship1 = { size: 2, isSunk: jest.fn(() => true) };
  const ship2 = { size: 3, isSunk: jest.fn(() => true) };

  gameboard.placeShip(ship1, 0, 0, true);
  gameboard.placeShip(ship2, 1, 1, true);

  const result = gameboard.allShipsSunk();

  expect(result).toBe(true);
});

test('allShipsSunk returns false when not all ships are sunk', () => {
  const gameboard = createGameboard();
  const ship1 = { size: 2, isSunk: jest.fn(() => true) };
  const ship2 = { size: 3, isSunk: jest.fn(() => false) };

  gameboard.placeShip(ship1, 0, 0, true);
  gameboard.placeShip(ship2, 1, 1, true);

  const result = gameboard.allShipsSunk();

  expect(result).toBe(false);
});