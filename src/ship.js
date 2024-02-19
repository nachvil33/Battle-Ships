// ship.js
export function createShip(shipData) {
  const ship = {
    name: shipData.name,
    size: shipData.size,
    hits: 0,
    images: shipData.images,
    isSunk() {
      return this.hits === this.size;
    },
    hit() {
      this.hits++;
    },
  };
  return ship;
}
