'use strict';

abstract class Vehicle {
  name: string;
  colour: string;
  selfDriving: boolean;
  
  constructor(name: string, colour: string, selfDriving: boolean = false) {
    this.name = name;
    this.colour = colour;
    this.selfDriving = selfDriving;
  }
}

export { Vehicle };
