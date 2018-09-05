'use strict';

import { Vehicle } from './Vehicle';
import { Flyable } from './Flyable';

export class Helicopter extends Vehicle implements Flyable {
  public altitude: number;
  constructor(name: string, colour: string, selfDriving: boolean = false, altitude: number = 0) {
    super(name, colour, selfDriving);
    this.altitude = altitude;
  }

  land():string {
    return 'boing boing boing crash';
  }

  fly():string {
    return `current altitude is ${this.altitude}`;
  }

  takeOff():string {
    this.altitude++;
    return `beware, we are ascending to ${this.altitude} meters`;
  }
}

