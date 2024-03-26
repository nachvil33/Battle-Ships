import { ships, getAllShipImages, getExplosionImage } from './ships.js';
import domElements from './domElements.js';
import { boardValidation } from './gameboardFactory.js';

export function createAlert(type, message) {
  domElements().alert.innerHTML = `
    <div class="container">
      <div class="notification is-${type}">
        <button class="delete"></button>
        <p class="has-text-weight-bold">${message}</p>
      </div>
    </div>
  `;
  const button = domElements().alert.querySelector('button');
  button.addEventListener('click', () => {
    button.removeEventListener('click', () => {});
    domElements().alert.innerHTML = '';
  });
}

export function drawGrid(type = 'player') {
  const board = type === 'enemy' ? domElements().board2 : domElements().board;
  board.innerHTML = '';
  for (let i = 0; i < 100; i += 1) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    board.appendChild(cell);
    // assign the id to each cell
    cell.setAttribute('id', 'P1');
    // assign the coordinates to each cell
    cell.setAttribute('data-x', i % 10);
    cell.setAttribute('data-y', Math.floor(i / 10));

    // delete any event listener
    cell.removeEventListener('click', () => {});
    cell.removeEventListener('mouseenter', () => {});
    cell.removeEventListener('mouseleave', () => {});
  }
}

function updateGrid(type = 'player', board) {
  const domBoard = type === 'enemy' ? domElements().board2 : domElements().board;
  const { ships } = board;
  const { missedAttacks } = board;

  if (type === 'player') {
    // show the ships
    ships.forEach((ship) => {
      for (let i = 0; i < ship.length; i += 1) {
        const cell = domBoard.querySelector(`[data-x="${ship.coordinates[i][0]}"][data-y="${ship.coordinates[i][1]}"]`);
        cell.classList.add('ship');
        const images = getAllShipImages(ship.name);
        cell.style.backgroundImage = `url(${images[i]})`;
      }
    });
  }

  // update the missed attacks
  missedAttacks.forEach((coord) => {
    const cell = domBoard.querySelector(`[data-x="${coord[0]}"][data-y="${coord[1]}"]`);
    cell.classList.add('has-background-danger');
  });

  // update the hit attacks
  ships.forEach((ship) => {
    ship.hits.forEach((coord) => {
      const cell = domBoard.querySelector(`[data-x="${coord[0]}"][data-y="${coord[1]}"]`);
      cell.classList.add('has-background-success');
      if (type === 'enemy') {
        cell.style.backgroundImage = `url(${getExplosionImage()})`;
      }
      // if ship is sunk so add the full image
      if (ship.isSunk()) {
        cell.classList.remove('has-background-success');
        cell.classList.add('has-background-success-dark');
        const images = getAllShipImages(ship.name);
        const actualShipPart = ship.coordinates
          .findIndex((shipCoord) => shipCoord[0] === coord[0] && shipCoord[1] === coord[1]);
        cell.style.backgroundImage = `url(${images[actualShipPart]})`;
        // rotate to the correct orientation
        const actualOrientation = () => {
          if (ship.coordinates[0][0] === ship.coordinates[1][0]) {
            return 'vertical';
          }
          return 'horizontal';
        };
        if (actualOrientation() === 'vertical') {
          cell.style.transform = 'rotate(90deg)';
        }
      }
    });
  });
}

function updateCard(board, type = 'Player') {
  const aircraftcarrier = board.ships.filter((ship) => ship.name === 'Aircraftcarrier');
  const battleship = board.ships.filter((ship) => ship.name === 'Battleship');
  const cruiser = board.ships.filter((ship) => ship.name === 'Cruiser');
  const submarine = board.ships.filter((ship) => ship.name === 'Submarine');
  const destroyer = board.ships.filter((ship) => ship.name === 'Destroyer');
  const boat = board.ships.filter((ship) => ship.name === 'Boat');

  let ships = [];
  if (type === 'Player') {
    ships = [
      [aircraftcarrier, domElements().player1AircraftcarrierQuantity],
      [battleship, domElements().player1BattleshipQuantity],
      [cruiser, domElements().player1CruiserQuantity],
      [submarine, domElements().player1SubmarineQuantity],
      [destroyer, domElements().player1DestroyerQuantity],
      [patroller, domElements().player1BoatQuantity],
    ];
  } else {
    ships = [
      [aircraftcarrier, domElements().player2AircraftcarrierQuantity],
      [battleship, domElements().player2BattleshipQuantity],
      [cruiser, domElements().player2CruiserQuantity],
      [submarine, domElements().player2SubmarineQuantity],
      [destroyer, domElements().player2DestroyerQuantity],
      [boat, domElements().player2BoatQuantity],
    ];
  }
  for (let i = 0; i < ships.length; i += 1) {
    if (ships[i][0].length === 0) {
      ships[i][1].innerHTML = '0';
      ships[i][1].classList.remove('has-text-success');
      ships[i][1].classList.add('has-text-danger');
    } else {
      const sunked = ships[i][0][0].isSunk();
      if (sunked) {
        ships[i][1].innerHTML = '0';
        ships[i][1].classList.remove('has-text-success');
        ships[i][1].classList.add('has-text-danger');
      } else {
        ships[i][1].innerHTML = '1';
        ships[i][1].classList.remove('has-text-danger');
        ships[i][1].classList.add('has-text-success');
      }
    }
  }
}

export function updatePlacingShip(shipName) {
  if (shipName === 'none') {
    domElements().placingShip.classList.add('is-hidden');
    return;
  }
  const ship = ships.find((ship) => ship.name === shipName);
  domElements().placingShip.classList.remove('is-hidden');
  domElements().placingShip.innerHTML = `
    <img src="${ship.fullImage}" alt="${shipName}" width="${ship.size * 20}">
  `;
}

export function showAction(type, message, color = 'green') {
  if (type === 'player') {
    domElements().playerAction.classList.remove('is-hidden');
    domElements().playerAction.innerHTML = message;
    if (color === 'green') {
      domElements().playerAction.classList.add('is-success');
      domElements().playerAction.classList.remove('is-warning');
    } else {
      domElements().playerAction.classList.add('is-warning');
      domElements().playerAction.classList.remove('is-success');
    }
  } else if (type === 'enemy') {
    domElements().enemyAction.classList.remove('is-hidden');
    domElements().enemyAction.innerHTML = message;
    if (color === 'green') {
      domElements().enemyAction.classList.add('is-success');
      domElements().enemyAction.classList.remove('is-warning');
    } else {
      domElements().enemyAction.classList.add('is-warning');
      domElements().enemyAction.classList.remove('is-success');
    }
  }
}

function checkValidMove(board, cell, orientation, shipLength, shipName) {
  const x = parseInt(cell.getAttribute('data-x'), 10);
  const y = parseInt(cell.getAttribute('data-y'), 10);
  const coords = [x, y];
  try {
    boardValidation(shipName, shipLength, coords, orientation, board.ships);
  } catch (e) {
    return false;
  }
  return true;
}

function setShipImage(board, cell, shipImages, orientation, shipLength, shipName) {
  const x = parseInt(cell.getAttribute('data-x'), 10);
  const y = parseInt(cell.getAttribute('data-y'), 10);
  const validMove = checkValidMove(board, cell, orientation, shipLength, shipName);
  for (let i = 0; i < shipLength; i += 1) {
    const cellToChange = orientation === 'horizontal'
      ? document.querySelector(`#P1[data-x="${x + i}"][data-y="${y}"]`)
      : document.querySelector(`#P1[data-x="${x}"][data-y="${y + i}"]`);
    if (cellToChange) {
      if (validMove) {
        cellToChange.style.transform = orientation === 'horizontal' ? 'rotate(0deg)' : 'rotate(90deg)';
        cellToChange.style.backgroundImage = `url(${shipImages[i]})`;
        cellToChange.classList.add('has-background-success');
      } else {
        cellToChange.classList.add('has-background-danger');
      }
    }
  }
}

function removeShipImage(cell, orientation, shipLength) {
  const x = parseInt(cell.getAttribute('data-x'), 10);
  const y = parseInt(cell.getAttribute('data-y'), 10);
  for (let i = 0; i < shipLength; i += 1) {
    const cellToChange = orientation === 'horizontal'
      ? document.querySelector(`#P1[data-x="${x + i}"][data-y="${y}"]`)
      : document.querySelector(`#P1[data-x="${x}"][data-y="${y + i}"]`);
    if (cellToChange) {
      if (!cellToChange.classList.contains('ship')) {
        cellToChange.style.backgroundImage = '';
      }
      cellToChange.classList.remove('has-background-success');
      cellToChange.classList.remove('has-background-danger');
    }
  }
}

function tryPlaceShip(cell, orientation, shipName, shipLength, board) {
  const x = parseInt(cell.getAttribute('data-x'), 10);
  const y = parseInt(cell.getAttribute('data-y'), 10);
  const validMove = checkValidMove(board, cell, orientation, shipLength, shipName);
  if (validMove) {
    board.placeShip(shipName, shipLength, [x, y], orientation);
    updateCard(board);
    updateGrid('player', board);
    return true;
  }
  return false;
}

function stopPlacing() {
  const cells = domElements().board.querySelectorAll('.cell');

  cells.forEach((cell) => {
    if (!cell.classList.contains('ship')) {
      cell.style.backgroundImage = '';
    }
    cell.classList.remove('has-background-success');
    cell.classList.remove('has-background-danger');
    cell.replaceWith(cell.cloneNode(true));
  });
}

function createResetButton() {
  const resetButton = document.createElement('button');
  resetButton.classList.add('button', 'is-danger', 'is-large', 'is-fullwidth');
  resetButton.innerHTML = 'Reset Game';
  resetButton.addEventListener('click', () => {
    window.location.reload();
  });
  domElements().alert.appendChild(resetButton);
}

function endGame(winner) {
  createAlert('success', `${winner}`);
  domElements().board.classList.add('is-hidden');
  domElements().board2.classList.add('is-hidden');
  domElements().placingShip.classList.add('is-hidden');
  domElements().playerAction.classList.add('is-hidden');
  domElements().enemyAction.classList.add('is-hidden');
  createResetButton();
}

function startAttacking(gameInstance) {
  const cells = domElements().board2.querySelectorAll('.cell');
  cells.forEach((cell) => {
    if (!cell.classList.contains('hit') && !cell.classList.contains('miss')) {
      cell.addEventListener('click', () => {
        const x = parseInt(cell.getAttribute('data-x'), 10);
        const y = parseInt(cell.getAttribute('data-y'), 10);
        try {
          const attack = gameInstance.playerAttack(x, y);
          if (attack === 'hit') {
            cell.classList.add('hit');
            createAlert('success', 'You hit a ship!, keep going!');
          } else if (attack === 'doubleMiss') {
            cell.classList.add('miss');
            createAlert('none', 'You missed! also the computer missed!');
          } else if (attack === 'missAndHit') {
            cell.classList.add('miss');
            createAlert('danger', 'You missed! the computer hit a ship!');
          }
          updateGrid('enemy', gameInstance.computerBoard);
          updateGrid('player', gameInstance.playerBoard);
          updateCard(gameInstance.computerBoard, 'enemy');
          updateCard(gameInstance.playerBoard);
          if (gameInstance.gameEnd()) {
            endGame(gameInstance.gameEnd());
            gameInstance.resetGame();
          }
        } catch (e) {
          createAlert('warning', e.message);
        }
      });
    }
    cell.addEventListener('mouseenter', () => {});
    cell.addEventListener('mouseleave', () => {});
  });
}

let placing = true;

export function startPlacing(gameInstance, orientation, shipName) {
  updateCard(gameInstance.computerBoard, 'enemy');

  const cells = domElements().board.querySelectorAll('.cell');
  const shipImages = getAllShipImages(shipName);
  const shipLength = shipImages.length;

  const shipTypes = ['Aircraftcarrier', 'Battleship', 'Cruiser', 'Submarine', 'Destroyer', 'Boat'];
  const nextShip = shipTypes.indexOf(shipName) + 1;

  document.addEventListener('keydown', (e) => {
    if (e.key === 'r' && placing) {
      stopPlacing();
      startPlacing(gameInstance, orientation === 'horizontal' ? 'vertical' : 'horizontal', shipName);
    }
  });

  cells.forEach((cell) => {
    cell.addEventListener('mouseenter', () => setShipImage(gameInstance.playerBoard, cell, shipImages, orientation, shipLength, shipName));
    cell.addEventListener('mouseleave', () => removeShipImage(cell, orientation, shipLength));
    cell.addEventListener('click', () => {
      const placed = tryPlaceShip(cell, orientation, shipName, shipLength,
        gameInstance.playerBoard);
      if (placed) {
        stopPlacing();
        if (nextShip < shipTypes.length) {
          updatePlacingShip(shipTypes[nextShip]);
          startPlacing(gameInstance, 'horizontal', shipTypes[nextShip]);
        } else {
          placing = false;
          updatePlacingShip('none');
          createAlert('success', 'All ships placed, placing computer ships');
          showAction('player', 'Waiting for computer', 'alert');
          showAction('enemy', 'Placing ships');
          // wait 3 second before placing computer ships (simulates thinking)
          setTimeout(() => {
            gameInstance.randomPlaceShips(gameInstance.computerBoard);
            updateCard(gameInstance.computerBoard, 'enemy');
            gameInstance.startGame();
            createAlert('success', 'All ships placed, Attack!');
            showAction('player', 'Attack the enemy!');
            showAction('enemy', 'Waiting for attack', 'alert');
            startAttacking(gameInstance);
          }, 3000);
        }
      }
    });
  });
}