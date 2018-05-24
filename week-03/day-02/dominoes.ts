'use strict';

/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

import {Domino} from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2)); 
    dominoes.push(new Domino(4, 6)); 
    dominoes.push(new Domino(1, 5)); 
    dominoes.push(new Domino(6, 7)); 
    dominoes.push(new Domino(2 ,4)); 
    dominoes.push(new Domino(7, 1));  
    return dominoes;
}

function print(corrOrder: Domino[]) {
    corrOrder.forEach(function (value) {
        console.log(value);
    });
}

let mydomino = initializeDominoes();

let corrOrder: Domino[] = [];

corrOrder.push(mydomino[0]);
for (let j: number = 0; j < 5; j ++) {
  for (let i: number = 0; i < 5; i ++) {
      if (corrOrder[j].values[1] === mydomino[i + 1].values[0]) {
      corrOrder.push(mydomino[i + 1]);
    }
  }
}

print(corrOrder);
