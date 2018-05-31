'use strict';

import { Animal } from './Animal';

class Mammal extends Animal {
  getName() {
    return `${this.sound} ! Hi, I\'m a ${this.name}`;
  }

  breed() {
    return 'pushing miniatrue versions out';
  }
}

export { Mammal };
