// ship.test.js
import { createShip } from './ship';

test('createShip initializes ship object', () => {
  const shipData = {
    name: 'Test Ship',
    size: 3,
    images: ['image1.png', 'image2.png', 'image3.png'],
  };

  const ship = createShip(shipData);

  expect(ship.name).toBe('Test Ship');
  expect(ship.size).toBe(3);
  expect(ship.hits).toBe(0);
  expect(ship.images).toEqual(['image1.png', 'image2.png', 'image3.png']);
  expect(ship.isSunk()).toBe(false);
});

test('hit() increments hits', () => {
  const shipData = {
    name: 'Test Ship',
    size: 3,
    images: ['image1.png', 'image2.png', 'image3.png'],
  };

  const ship = createShip(shipData);
  ship.hit();

  expect(ship.hits).toBe(1);
  expect(ship.isSunk()).toBe(false);
});

test('isSunk() returns true when hits equal size', () => {
  const shipData = {
    name: 'Test Ship',
    size: 3,
    images: ['image1.png', 'image2.png', 'image3.png'],
  };

  const ship = createShip(shipData);
  ship.hit();
  ship.hit();
  ship.hit();

  expect(ship.isSunk()).toBe(true);
});
