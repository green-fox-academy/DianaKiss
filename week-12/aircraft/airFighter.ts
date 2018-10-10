'use strict';

import { Aeroplane } from './aeroplane'

export class AirFighter extends Aeroplane {

  protected type: string;
  protected currentAmmo: number;
  protected maxAmmo: number;
  protected baseDamage: number;
  protected integrity: number;

  public constructor(name: string, maxSpeed: number, type: string, currentAmmo: number, maxAmmo: number, baseDamage: number, integrity: number) {
    super(name, maxSpeed);
    this.type = type;
    this.currentAmmo = currentAmmo;
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
    this.integrity = integrity;
  }

  refill(refiller: number): void {
    if (this.maxAmmo > refiller + this.currentAmmo) {
      this.currentAmmo = refiller + this.currentAmmo;
    } else {
      this.currentAmmo = this.maxAmmo;
    }
  }

  fight(enemy: AirFighter): void {
    let damage: number = this.baseDamage * this.currentAmmo;
    this.currentAmmo = 0;
    console.log(`The ${this.name} attacked the ${enemy.name}!`);
    enemy.getDamage(damage);
  }

  getDamage(shit: number): void {
    this.integrity = this.integrity - shit;
    console.log(`The ${this.name} took damage of ${shit}!`);
  }
}
