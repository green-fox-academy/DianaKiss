'use strict';

import { Insturment } from './main-music';
import { StringedInsturment } from './Stringed-Instruments';

class ElectricGuitar extends StringedInsturment {
  protected colour: string;

  constructor(name: string = 'Eguitar', numberOfStirngs: number = 6, woiceOf: string = 'Twang!', colour: string = 'brown') {
    super(name, numberOfStirngs, woiceOf);
    this.colour = colour;
  }

  sound() {
    return this.woiceOf
  }

}


export { ElectricGuitar };

