'use strict';

import { Insturment } from './main-music';
import { StringedInsturment } from './Stringed-Instruments';

class BassGuitar extends StringedInsturment {

  constructor(name: string = 'BaseG.', numberOfStirngs: number = 4, woiceOf: string = 'Duum - duuum - dumdum!') {
    super(name, numberOfStirngs, woiceOf);
  
  }

  sound() {
    return this.woiceOf
  }
}


export { BassGuitar };
