'use strict';

export abstract class Aeroplane {
  protected aeroplane: string;
  protected name: string;
  protected maxSpeed: number;
  protected altitude: number;
  constructor(name: string, maxSpeed: number) {
    this.name = name;
    this.maxSpeed = maxSpeed;
    this.altitude = this.altitude;
  }

  fly(speed): void {
    if (speed <= this.maxSpeed) {
      this.altitude = speed / 10;
    } else {
      this.altitude = this.maxSpeed / 10;
    }
  }

}
