export function initBoard(board, cellClass) {
    for (let i = 0; i < 100; i++) {
      const cell = document.createElement('div');
      cell.classList.add(cellClass);
      cell.dataset.row = Math.floor(i / 10).toString();
      cell.dataset.col = (i % 10).toString();
      board.appendChild(cell);
    }
  }
  
  export function addEvents(board, cellClass) {
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
  
  export function addDraggableShips(container) {
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
  
  export function randomAttack() {
    let row, col;
    do {
      row = Math.floor(Math.random() * 10);
      col = Math.floor(Math.random() * 10);
    } while (gameboard.board[row][col] !== null);
    return { row, col };
  }
  