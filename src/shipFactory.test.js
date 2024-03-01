// shipFactory.test.js
import { createShip } from './shipFactory';

test('createShip returns an object with the correct properties', () => {
  const shipData = {
    name: 'TestShip',
    size: 3,
    images: ['image1', 'image2', 'image3'],
  };

  const ship = createShip(shipData);

  expect(ship).toHaveProperty('name', 'TestShip');
  expect(ship).toHaveProperty('size', 3);
  expect(ship).toHaveProperty('hits', 0);
  expect(ship).toHaveProperty('images', ['image1', 'image2', 'image3']);
});

test('hit method increments hits property', () => {
  const shipData = {
    name: 'TestShip',
    size: 3,
    images: ['image1', 'image2', 'image3'],
  };

  const ship = createShip(shipData);
  ship.hit();

  expect(ship.hits).toBe(1);
});

test('isSunk method returns true when hits equal size', () => {
  const shipData = {
    name: 'TestShip',
    size: 3,
    images: ['image1', 'image2', 'image3'],
  };

  const ship = createShip(shipData);
  ship.hit();
  ship.hit();
  ship.hit();

  expect(ship.isSunk()).toBe(true);
});

test('isSunk method returns false when hits are less than size', () => {
  const shipData = {
    name: 'TestShip',
    size: 3,
    images: ['image1', 'image2', 'image3'],
  };

  const ship = createShip(shipData);
  ship.hit();
  ship.hit();

  expect(ship.isSunk()).toBe(false);
});
