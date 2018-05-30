'use strict';

import { Vehicle } from './Vehicle';
import { Flyable } from './Flyable';

class Helicopter extends Vehicle implements Flyable {
  public altitude: number;
  constructor(name: string, colour: string, selfDriving: boolean = false, altitude: number = 0) {
    super(name, colour, selfDriving);
    this.altitude = altitude;
  }

  land() {
    return 'boing boing boing crash';
  }

  fly() {
    return `current altitude is ${this.altitude}`;
  }

  takeOff() {
    this.altitude++;
    return `beware, we are ascending to ${this.altitude} meters`;
  }
}

export { Helicopter };
