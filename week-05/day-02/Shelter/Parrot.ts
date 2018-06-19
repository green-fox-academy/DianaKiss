'use strict';

import {Animal} from './Animal'


export class Parrot extends Animal {
  constructor(name: string = 'parrot', healthCost: number = Math.floor(Math.random()*7 + 4), isHealthy: boolean = false) {
    super (name, healthCost, isHealthy);
  }
  
}
