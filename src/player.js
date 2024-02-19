import { randomAttack } from './helpers.js';

export function createPlayer(gameboard, difficulty = 'basic') {
  function takeTurn(enemyGameboard) {
    let target;
    switch (difficulty) {
      case 'basic':
        target = randomAttack();
        break;
      default:
        target = randomAttack();
    }
    const result = enemyGameboard.receiveAttack(target.row, target.col);
    return { ...target, result };
  }

  return { takeTurn };
}
