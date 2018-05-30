'use strict';

import { Plant } from './plant';

class Tree extends Plant {
  
  public checkwater(): void {
    if (this.waterLevel < 10) {
      console.log('Water me, I\'m a thirsty Tree');
    }
  }


}

export { Tree };
