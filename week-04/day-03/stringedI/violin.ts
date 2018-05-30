'use strict';

import { Insturment } from './main-music';
import { StringedInsturment } from './Stringed-Instruments';

class Violin extends StringedInsturment {

  constructor(name: string = 'violino', numberOfStirngs: number = 4, woiceOf: string = 'Scrreeeeeech... #####@@@@@@') {
    super(name, numberOfStirngs, woiceOf);
  
  }

  sound() {
    return this.woiceOf
  }
}

export { Violin };
