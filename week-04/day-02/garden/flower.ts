'use strict';

import { Plant } from './plant';

class Flower extends Plant {

  public checkwater(): void {
    if (this.waterLevel < 5) {
      console.log(`Water me, I\'m a thirsty ${this.colour} Flower. Current water level is: ${this.returnWaterlevel()}`);
    }
  }
}


export { Flower };
