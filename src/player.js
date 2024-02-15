export function createPlayer(gameboard, difficulty = 'basic') {
  function randomAttack() {
    let row, col;
    do {
      row = Math.floor(Math.random() * 10);
      col = Math.floor(Math.random() * 10);
    } while (gameboard.board[row][col] !== null);
    return { row, col };
  }

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
