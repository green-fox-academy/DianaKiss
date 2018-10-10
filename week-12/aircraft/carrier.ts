'use strict';

import { AirFighter } from './airFighter';

export class Carrier {

  protected name: string;
  protected aircrafts: AirFighter[];
  protected ammoStore: number;

  public constructor(name: string) {
    this.name = name;
    this.aircrafts = [];
    this.ammoStore = 1000;
  }

  public storeAirFighters(airFighter: AirFighter): string {
    this.aircrafts.push(airFighter);
    return `This carrier is ${this.name}. Available aircrafts are: ${this.aircrafts}`
  }

}