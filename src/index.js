import './style.css';
import { createGameboard } from './gameboard';
import { createPlayer } from './player';
import { addEvents, addDraggableShips, initBoard } from './helpers';
import { ships } from './ships';

document.addEventListener('DOMContentLoaded', () => {
  const playerContainer = document.getElementById('player-container');
  const playerBoard = document.getElementById('player-board');
  const computerBoard = document.getElementById('computer-board');
  const startButton = document.getElementById('start-button');

  if (playerContainer && playerBoard && computerBoard && startButton) {
    initBoard(playerBoard, 'player-cell');
    initBoard(computerBoard, 'computer-cell');

    addEvents(playerBoard, 'player-cell');
    addDraggableShips(playerContainer);

    startButton.addEventListener('click', startGame);
  } else {
    console.error('One or more elements not found.');
  }
});

function startGame() {
  const shipsInContainer = document.querySelectorAll('.ship');
  const shipsOnBoard = document.querySelectorAll('#player-board .ship');

  if (shipsInContainer.length === 0 && shipsOnBoard.length > 0) {
    const playerGameboard = createGameboard();
    const computerGameboard = createGameboard();

    const player = createPlayer(playerGameboard);
    const computer = createPlayer(computerGameboard, 'basic');

    placeComputerShips(computerGameboard);

    placePlayerShips(playerGameboard);

    // Display computer ships and boards
    displayComputerShips(computerGameboard);
    displayBoards(playerGameboard, computerGameboard);

    gameLoop(player, computer);
  } else {
    alert('Debes colocar todas las naves antes de iniciar el juego.');
  }
}
