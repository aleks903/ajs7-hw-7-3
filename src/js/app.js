import Bowman from './Bowman.js';
import Swordsman from './Swordsman.js';
import Magician from './Magician.js';
import Undead from './Undead.js';
import Zombie from './Zombie.js';
import Deamon from './Daemon.js';

const heroesD = new Bowman('Bowman', 'Bowman');
const heroesB = new Swordsman('Swordsman', 'Swordsman');
const heroesM = new Magician('Magician', 'Magician');
const heroesU = new Undead('Undead', 'Undead');
const heroesZ = new Zombie('Zombie', 'Zombie');
const heroesDe = new Deamon('Deamon', 'Deamon');

console.log(heroesD);
console.log(heroesB);
console.log(heroesM);
console.log(heroesU);
console.log(heroesZ);
console.log(heroesDe);
