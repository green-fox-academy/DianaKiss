'use strict';

import { Animal } from './Animal';
import { Bird } from './Bird';
import { Reptile } from './Reptile';
import { Mammal } from './Mammal';

class Zoo {
  
  protected name: string;
  protected cage: Animal[];
  
  public constructor(name: string) {
    this.name = name;
    this.cage = [];
  }

}

let peacock = new Bird('Peacock', 3, 'male', 'colorful talons', 'EEEEEEERRRRRK!');
//cage.push(peacock);

console.log(peacock.getName());

