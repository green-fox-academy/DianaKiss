'use strict';

abstract class Plant {
  protected colour: string;
  protected waterLevel: number;
  
  public constructor(colour: string, waterLevel: number = 0) {
    this.colour = colour;
    this.waterLevel = waterLevel;
  }

  abstract checkwater();

  returnWaterlevel():number {
    return this.waterLevel;
  }

  getWatered(waterAmount: number): void {
    this.waterLevel += waterAmount ;
  }
  
}

export { Plant };
