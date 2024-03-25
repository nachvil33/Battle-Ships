import './style.css';
import {
  drawGrid,
  showAction,
  updatePlacingShip,
  createAlert,
  startPlacing,
} from './domManager.js';
import game from './game.js';

const gameInstance = game();

// draw the boards
drawGrid();
drawGrid('enemy');

// Show action to the player
showAction('player', 'Place your ships');
showAction('enemy', 'Waiting For Ships', 'alert');

updatePlacingShip('Aircraftcarrier');

// Show the alert
createAlert('success', 'Game started, place your ships (Press R to rotate)');

startPlacing(gameInstance, 'horizontal', 'Aircraftcarrier');