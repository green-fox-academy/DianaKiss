'use strict';

class Plant {
  protected colour: string;
  protected waterLevel: number;
  
  public constructor(colour: string, waterLevel: number = 0) {
    this.colour = colour;
    this.waterLevel = waterLevel;
  }
  
}

export { Plant };
