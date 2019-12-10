/**
 * Функция создания персонажа Daemon, наследуется от Character,
 * принимает на вход имя и тип персонажа
 * @constructor Daemon
 * @param name имя персонажа
 * @param type тип персонажа
 */
import Character from './Character.js';

export default class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
    this._attack = 10;
    this._defence = 40;
  }
}
