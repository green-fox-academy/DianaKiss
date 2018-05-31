'use strict';

import { Animal } from './Animal';

class Reptile extends Animal {
  getName() {
    return `${this.sound} ! Hi, I\'m a ${this.name}`;
  }

  breed() {
    return 'lay eggs';
  }
}

export { Reptile };