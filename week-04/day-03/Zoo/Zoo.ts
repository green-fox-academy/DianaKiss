'use strict';

import { Animal } from './Animal';
import { Bird } from './Bird';
import { Reptile } from './Reptile';
import { Mammal } from './Mammal';
import { Flyable } from '../Flyable/Flyable';

let allatkert = []

let peacock = new Bird('Peacock', 3, 'male', 'colorful talons', 'EEEEEEERRRRRK!');
allatkert.push(peacock);

console.log(peacock.getName());


let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());

