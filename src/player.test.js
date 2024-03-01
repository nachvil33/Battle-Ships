import { createPlayer } from './player';
import { createGameboard } from './gameboardFactory';

test('createPlayer returns an object with the correct properties', () => {
  const gameboard = createGameboard();
  const player = createPlayer(gameboard);

  expect(player).toHaveProperty('takeTurn');
  expect(player.takeTurn).toBeInstanceOf(Function);
});

test('takeTurn calls receiveAttack on the gameboard', () => {
  const gameboard = createGameboard();
  const player = createPlayer(gameboard);

  player.takeTurn();

  expect(gameboard.receiveAttack).toHaveBeenCalled();
});

test('computerTakeTurn calls receiveAttack on the enemy gameboard', () => {
  const gameboard = createGameboard();
  const player = createPlayer(gameboard);

  player.computerTakeTurn();

  expect(gameboard.receiveAttack).toHaveBeenCalled();
});