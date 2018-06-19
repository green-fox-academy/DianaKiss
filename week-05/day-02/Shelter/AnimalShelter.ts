'use strict';

import {Animal} from './Animal'
import {Cat} from './Cat'
import {Dog} from './Dog'
import {Parrot} from './Parrot'

export class Shelter {

   budget: number;
   animalsList: Animal[];
   adoptersList: string[];

  constructor() {
    this.animalsList = [];
    this.adoptersList = [];
    this.budget = 50;
  }

  rescue(animal: Animal): number {
    this.animalsList.push(animal);
    return this.animalsList.length;
  }

  addAdopter(adopterName: string): void {
    this.adoptersList.push(adopterName);
  }
  
  doctor():number {   //this is the heal() method
    let healedAnimals: number = 0;
    for (let i: number = 0; i < this.animalsList.length; i ++) {
      if (!this.animalsList[i].isHealthy && this.budget >= this.animalsList[i].healthCost)
      this.animalsList[i].heal();
      this.budget -= this.animalsList[i].healthCost;
      healedAnimals ++;
      break;
      
    }
    return healedAnimals;
  }

  findOwner(): void { //create an array of healthy animals
    let healthyAnimals: Animal[] = [];
    if (this.animalsList.length > 0 && this.adoptersList.length > 0) {
      for (let i: number= 0; i < this.animalsList.length; i ++) {
        if ( this.animalsList[i].isAdoptable() ) {
          healthyAnimals.push(this.animalsList[i]);
        }
      }
    }

    let adoptedAnimal: Animal = healthyAnimals[Math.floor(Math.random()* healthyAnimals.length)];
    let adopters: string = this.adoptersList[Math.floor(Math.random()* this.adoptersList.length)];

    //removing the adopted animals and adopters from the original array

    this.animalsList.splice(this.animalsList.indexOf(adoptedAnimal), 1);
    this.adoptersList.splice(this.adoptersList.indexOf(adopters), 1);

  }

  earnDonation(amount: number): number {
    this.budget = this.budget + amount;
    return this.budget;
  }

  toString() {

    let animalStrings: string = '';
     
    this.animalsList.forEach(element => {
      animalStrings = animalStrings + element.toString(); 
      
    });
    animalStrings = animalStrings + (`Budget${this.budget}€, There are ${this.animalsList.length}animal(s) and ${this.adoptersList.length} potential adopter(s)`);
    
    return animalStrings;
  
  }

}