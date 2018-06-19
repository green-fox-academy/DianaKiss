'use strict';

export abstract class Animal {

  name: string;
  isHealthy: boolean;
  healthCost: number;
  adoptable: boolean;

  constructor(name: string, healthCost: number, isHealthy: boolean) {
    this.name = name;
    this.healthCost = healthCost;
    this.isHealthy = isHealthy;
  }

  heal() {
    this.isHealthy = true;
  }

  isAdoptable(): boolean {
    return this.isHealthy
  }

  toString() {
    if (!this.isHealthy) {
      return `${this.name} is not healthy (${this.healthCost}€), and not adoptable`;
    } else {
      return `${this.name} is healthy, and adoptable`;
    }

  }

} 