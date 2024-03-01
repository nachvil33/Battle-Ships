// Get the Actual DOM elements
const board = document.getElementById('player1');
const board2 = document.getElementById('player2');
const playerAction = document.getElementById('playerAction');
const enemyAction = document.getElementById('enemyAction');
const placingShip = document.getElementById('placingShip');
const alert = document.getElementById('alert');
const enemyStatusTag = document.getElementById('status').querySelector('span');

// Get the DOM elements from the player cards
const player1Card = document.getElementById('player1Card');
// Aircrafcarrier
const player1Aircrafcarrier = player1Card.querySelector('#aircrafcarrier');
const player1AircrafcarrierQuantity = player1Carrier.querySelector('#quantity');
// Battleship
const player1Battleship = player1Card.querySelector('#battleship');
const player1BattleshipQuantity = player1Battleship.querySelector('#quantity');
// Submarine
const player1Submarine = player1Card.querySelector('#submarine');
const player1SubmarineQuantity = player1Submarine.querySelector('#quantity');
// cruiser
const player1Cruiser = player1Card.querySelector('#cruiser');
const player1CruiserQuantity = player1Cruiser.querySelector('#quantity');
// Destroyer
const player1Destroyer = player1Card.querySelector('#destroyer');
const player1DestroyerQuantity = player1Destroyer.querySelector('#quantity');
// patrol ship
const player1Boat = player1Card.querySelector('#boat');
const player1BoatQuantity = player1Boat.querySelector('#quantity');

// Get the DOM elements from the computer cards
const player2Card = document.getElementById('player2Card');
// Carrier
const player2Aircrafcarrier = player2Card.querySelector('#aircraftcarrier');
const player2AircrafcarrierQuantity = player2Aircrafcarrier.querySelector('#quantity');
// Battleship
const player2Battleship = player2Card.querySelector('#battleship');
const player2BattleshipQuantity = player2Battleship.querySelector('#quantity');
// Submarine
const player2Submarine = player2Card.querySelector('#submarine');
const player2SubmarineQuantity = player2Submarine.querySelector('#quantity');
// cruiser
const player2Cruiser = player2Card.querySelector('#cruiser');
const player2CruiserQuantity = player2Cruiser.querySelector('#quantity');
// Destroyer
const player2Destroyer = player2Card.querySelector('#destroyer');
const player2DestroyerQuantity = player2Destroyer.querySelector('#quantity');
// patrol ship
const player2Boat = player2Card.querySelector('#boat');
const player2BoatQuantity = player2Boat.querySelector('#quantity');

export default function getDomElements() {
  return {
    board,
    board2,
    playerAction,
    enemyAction,
    placingShip,
    alert,
    enemyStatusTag,
    player1Card,
    player1Aircrafcarrier,
    player1AircrafcarrierQuantity,
    player1Battleship,
    player1BattleshipQuantity,
    player1Submarine,
    player1SubmarineQuantity,
    player1Cruiser,
    player1CruiserQuantity,
    player1Destroyer,
    player1DestroyerQuantity,
    player1Boat,
    player1BoatQuantity,
    player2Card,
    player2Aircrafcarrier,
    player2AircrafcarrierQuantity,
    player2Battleship,
    player2BattleshipQuantity,
    player2Submarine,
    player2SubmarineQuantity,
    player2Cruiser,
    player2CruiserQuantity,
    player2Destroyer,
    player2DestroyerQuantity,
    player2Boat,
    player2BoatQuantity,
  };
}