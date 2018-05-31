'use strict';

import { Animal } from './Animal';

class Bird extends Animal {
  constructor(name: string, age: number = 0, gender?: string, skinType: string = 'Feathers', sound: string = 'Twerp, Twerp!') {
    super(name, age, gender, skinType, sound);
    
  }
  getName() {
    return `${this.sound} ! Hi, I\'m a ${this.name}`;
  }

  breed() {
    return 'lay eggs';
  }
}


export { Bird };
