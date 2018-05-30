'use strict';

import { Plant } from './plant';

class Flower extends Plant {

  public checkwater(): void {
    if (this.waterLevel < 5) {
      console.log('Water me, I\'m a thirsty Flower');
    }
  }
}


export { Flower };
