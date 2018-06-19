'use strict';

import {Animal} from './Animal'


export class Dog extends Animal {
  constructor(name: string = 'dog', healthCost: number = Math.floor(Math.random()*7 + 1), isHealthy: boolean = false) {
    super (name, healthCost, isHealthy);
  }
  
}
