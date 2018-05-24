'use strict';

/*
Create an Animal class

Every animal has a hunger value, which is a whole number
Every animal has a thirst value, which is a whole number
when creating a new animal object these values are created with the default 50 value
Every animal can eat() which decreases their hunger by one
Every animal can drink() which decreases their thirst by one
Every animal can play() which increases both by one
*/


class Animal {
  hunger: number = 50;
  thirst: number = 50;
  type = '';
  constructor(species: string) {
    this.hunger = 50;
    this.thirst = 50;
    this.type = species;
  }


  eat() {
    this.hunger -= 1;
  }

  drink() {
    this.thirst -= 1;
  }

  play() {
    this.hunger += 1;
    this.thirst += 1;
  }
}


console.log('letrhoztam egy cicat');

let cat: Animal = new Animal('cica');
let axolotl = new Animal('vizijatek');
let dog = new Animal('kutya');
let fish = new Animal('haluci');

let zooo: any[] = [];

for (let i: number = 0; i <= Animal.length; i ++) {
 zooo.push(Animal[i]);
}
console.log(zooo);

console.log(cat);

cat.drink();
console.log(cat);

cat.play();
console.log(cat);




