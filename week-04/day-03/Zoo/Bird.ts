'use strict';

import { Animal } from './Animal';
import { Flyable } from '../Flyable/Flyable';

class Bird extends Animal implements Flyable{
  constructor(name: string, age: number = 0, gender?: string, skinType: string = 'Feathers', sound: string = 'Twerp, Twerp!') {
    super(name, age, gender, skinType, sound);
    
  }
  getName() {
    return `${this.sound} ! Hi, I\'m a ${this.name}`;
  }

  breed() {
    return 'lay eggs';
  }

  land() {
    return 'Quaaaak! ...crash...';
  }

  fly() {
    return 'Flap-flap-flap';
  }

  takeOff(){
    return `Beware, the ${this.name} is flying up!`;
  }
}


export { Bird };
