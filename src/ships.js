// Get the images from webpack
import aircraftcarrierImg from '../src/images/aircraftcarrier.png';
import aircraftcarrier1 from '../src/images/aircraftcarrier1.png';
import aircraftcarrier2 from '../src/images/aircraftcarrier2.png';
import aircraftcarrier3 from '../src/images/aircraftcarrier3.png';
import aircraftcarrier4 from '../src/images/aircraftcarrier4.png';
import aircraftcarrier5 from '../src/images/aircraftcarrier5.png';

import battleship from '../src/images/battleship.png';
import battleship1 from '../src/images/battleship1.png';
import battleship2 from '../src/images/battleship2.png';
import battleship3 from '../src/images/battleship3.png';
import battleship4 from '../src/images/battleship4.png';

import cruiser from '../src/images/cruiser.png';
import cruiser1 from '../src/images/cruiser1.png';
import cruiser2 from '../src/images/cruiser2.png';
import cruiser3 from '../src/images/cruiser3.png';

import destroyer from '../src/images/destroyer.png';
import destroyer1 from '../src/images/destroyer1.png';
import destroyer2 from '../src/images/destroyer2.png';
import destroyer3 from '../src/images/destroyer3.png';

import submarine from '../src/images/submarine.png';
import submarine1 from '../src/images/submarine1.png';
import submarine2 from '../src/images/submarine2.png';

import boat from '../src/images/boat.png';
import boat1 from '../src/images/boat1.png';
import boat2 from '../src/images/boat2.png';

import explosion from '../src/images/explosion.png';

const aircraftcarrierShip = {
  name: 'Aircraftcarrier',
  size: 5,
  fullImage: aircraftcarrierImg,
  images: [aircraftcarrier1, aircraftcarrier2, aircraftcarrier3, aircraftcarrier4, aircraftcarrier5],
};

const battleshipShip = {
  name: 'Battleship',
  size: 4,
  fullImage: battleship,
  images: [battleship1, battleship2, battleship3, battleship4],
};

const cruiserShip = {
  name: 'Cruiser',
  size: 3,
  fullImage: cruiser,
  images: [cruiser1, cruiser2, cruiser3],
};

const submarineShip = {
  name: 'Submarine',
  size: 3,
  fullImage: submarine,
  images: [submarine1, submarine2,],
};

const destroyerShip = {
  name: 'Destroyer',
  size: 3,
  fullImage: destroyer,
  images: [destroyer1, destroyer2, destroyer3],
};

const boatShip = {
  name: 'boat',
  size: 2,
  fullImage: boat,
  images: [boat1, boat2],
};

export const ships = [
  aircraftcarrierShip,
  battleshipShip,
  cruiserShip,
  submarineShip,
  destroyerShip,
  boatShip,
];

export function getAllShipImages(shipName) {
  const ship = ships.find((ship) => ship.name === shipName);
  return ship.images;
}

export function getExplosionImage() {
  return explosion;
}