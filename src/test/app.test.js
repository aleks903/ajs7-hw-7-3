import Bowman from '../js/Bowman.js';

test('Проверка Bowman powerMod = true, health * 2', () => {
  const received = new Bowman('Лучник', 'Bowman');
  received.powerMod = true;
  expect(received.health).toBe(200);
});

test('Проверка Bowman powerMod = false, attack', () => {
  const received = new Bowman('Лучник', 'Bowman');
  received.powerMod = false;
  expect(received.attack).toBe(25);
});

test('Проверка Bowman значение powerMod', () => {
  const received = new Bowman('Лучник', 'Bowman');
  received.powerMod = false;
  expect(received.powerMod).toBe(false);
});

test('Проверка Bowman powerMod повторный вызов, health', () => {
  const received = new Bowman('Лучник', 'Bowman');
  received.powerMod = true;
  received.powerMod = false;
  received.powerMod = true;
  expect(received.health).toBe(100);
});

test('Проверка формирования Bowman', () => {
  const received = new Bowman('Лучник', 'Bowman');
  const expected = {
    name: 'Лучник',
    type: 'Bowman',
    _health: 100,
    level: 1,
    _attack: 25,
    _defence: 25,
    _powerMod: false,
    onPowerMod: false,
  };

  expect(received).toEqual(expected);
});

test('Проверка levelUp Bowman', () => {
  const received = new Bowman('Лучник', 'Bowman');
  received.attack = 20;
  received.defence = 20;
  received.levelUp();
  const expected = {
    name: 'Лучник',
    type: 'Bowman',
    _health: 100,
    level: 2,
    _attack: 24,
    _defence: 24,
    _powerMod: false,
    onPowerMod: false,
  };

  expect(received).toEqual(expected);
});

test('Проверка levelUp Bowman.health = 1', () => {
  const received = new Bowman('Лучник', 'Bowman');
  received.health = 1;
  received.levelUp();
  const expected = {
    name: 'Лучник',
    type: 'Bowman',
    _health: 100,
    level: 2,
    _attack: 30,
    _defence: 30,
    _powerMod: false,
    onPowerMod: false,
  };

  expect(received).toEqual(expected);
});
test('Проверка levelUp Bowman.health = 0', () => {
  const received = new Bowman('Лучник', 'Bowman');
  received.health = 0;
  expect(() => {
    received.levelUp();
  }).toThrow();
});
