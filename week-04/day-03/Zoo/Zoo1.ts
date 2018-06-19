'use strict';

import { Animal } from './Animal';
import { Bird } from './Bird';
import { Reptile } from './Reptile';
import { Mammal } from './Mammal';
import { Flyable } from '../Flyable/Flyable';

class Zoo {
  
  protected name: string;
  protected cage: Animal[];
  
  constructor(name: string) {
    this.name = name;
    this.cage = [];
  }

  public addAnimal(animal: Animal) {
    this.cage.push(animal);
  }
}

let allatkert = new Zoo('Fovarosi Allatkert');
let vadaspark = new Zoo('Szegedi Vadaspark');

let peacock = new Bird('Peacock', 3, 'male', 'colorful talons', 'EEEEEEERRRRRK!');

console.log(peacock.getName());

allatkert.addAnimal(peacock);

console.log(peacock.takeOff());
console.log(peacock.fly());
console.log(peacock.land());
