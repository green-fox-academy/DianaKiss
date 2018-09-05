'use strict';

import { Aeroplane } from './aeroplane'

export class AirFighter extends Aeroplane {

  protected type: string;
  protected currentAmmo: number;
  protected maxAmmo: number;
  protected damage: number;

  public constructor(name: string, maxSpeed: number, type: string, currentAmmo: number, maxAmmo: number, damage: number) {
    super(name, maxSpeed);
    this.type = type;
    this.currentAmmo = currentAmmo;
    this.maxAmmo = maxAmmo;
    this.damage = damage;
  }
}
