'use strict';

import {Animal} from './Animal'

export class Cat extends Animal {
  constructor(name: string = 'cat', healthCost: number = Math.floor(Math.random()*7), isHealthy: boolean = false) {
    super (name, healthCost, isHealthy);
  }
  
}