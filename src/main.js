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

function initBoard(board, cellClass) {
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.classList.add(cellClass);
    cell.dataset.row = Math.floor(i / 10).toString();
    cell.dataset.col = (i % 10).toString();
    board.appendChild(cell);
  }
}

function addEvents(board, cellClass) {
  board.addEventListener('click', (event) => {
    const targetCell = event.target;
    if (targetCell.classList.contains(cellClass)) {
      console.log('Cell clicked:', targetCell.dataset.row, targetCell.dataset.col);
    }
  });

  board.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  board.addEventListener('drop', (event) => {
    const targetCell = event.target;
    const draggedShip = document.querySelector('.dragging');
    if (targetCell.classList.contains(cellClass) && draggedShip) {
      targetCell.appendChild(draggedShip);
      draggedShip.classList.remove('dragging');
    }
  });
}

function addDraggableShips(container) {
  const ships = container.querySelectorAll('.ship');

  ships.forEach((ship) => {
    const draggedShip = ship;

    draggedShip.addEventListener('dragstart', (event) => {
      if (event.dataTransfer) {
        // Pasar el id y la longitud del barco en el formato "id-longitud"
        event.dataTransfer.setData('text/plain', `${draggedShip.id}-${draggedShip.dataset.length}`);
      }
      draggedShip.classList.add('dragging');
    });

    draggedShip.addEventListener('dragend', (event) => {
      draggedShip.classList.remove('dragging');
    });
  });
}

function startGame() {
  // Verificar si todas las naves del jugador han sido colocadas
  const shipsInContainer = document.querySelectorAll('.ship');
  const shipsOnBoard = document.querySelectorAll('#player-board .ship');

  if (shipsInContainer.length === 0 && shipsOnBoard.length > 0) {
    // Iniciar el juego y permitir que la máquina coloque sus barcos
    // Lógica para colocar barcos de la máquina
    placeComputerShips();
    // Resto de la lógica del juego
    console.log('Juego iniciado');
  } else {
    alert('Debes colocar todas las naves antes de iniciar el juego.');
  }
}

function placeComputerShips() {
  // Obtener el tablero de la máquina
  const computerGameboard = createGameboard();

  // Obtener las naves de la máquina
  const computerShips = document.querySelectorAll('#computer-board .ship');

  computerShips.forEach((ship) => {
    // Lógica para colocar los barcos de la máquina de manera aleatoria
    const randomRow = Math.floor(Math.random() * 10);
    const randomCol = Math.floor(Math.random() * 10);
    const isVertical = Math.random() < 0.5;

    try {
      computerGameboard.placeShip(ship, randomRow, randomCol, isVertical);
    } catch (error) {
      // Si hay un error al colocar el barco, intentar nuevamente
      placeComputerShips();
    }
  });
}
