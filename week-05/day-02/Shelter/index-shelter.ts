'use strict';

import {Animal} from './Animal'
import {Cat} from './Cat'
import {Dog} from './Dog'
import {Parrot} from './Parrot'
import {Shelter} from './AnimalShelter'


let animalShelter = new Shelter();

animalShelter.rescue(new Cat());
animalShelter.rescue(new Dog("Furkesz"));
animalShelter.rescue(new Parrot());
console.log(animalShelter.toString());
// Budget: 50€, There are 3 animal(s) and 0 potential adopter(s)
// Cat is not healthy (3€) and not adoptable
// Furkesz is not healthy (1€) and not adoptable
// Parrot is not healthy (7€) and not adoptable
animalShelter.doctor();
console.log(animalShelter.toString());
// Budget: 47€, There are 3 animal(s) and 0 potential adopter(s)
// Cat is healthy and adoptable
// Furkesz is not healthy (1€) and not adoptable
// Parrot is not healthy (7€) and not adoptable     
animalShelter.addAdopter("Kond");
console.log(animalShelter.toString());
// Budget: 47€, There are 3 animal(s) and 1 potential adopter(s)
// Cat is healthy and adoptable
// Furkesz is not healthy (1€) and not adoptable
// Parrot is not healthy (7€) and not adoptable
animalShelter.findOwner();
animalShelter.earnDonation(30);
console.log(animalShelter.toString());
// Budget: 77€, There are 2 animal(s) and 0 potential adopter(s)
// Furkesz is not healthy (1€) and not adoptable
// Parrot is not healthy (7€) and not adoptable