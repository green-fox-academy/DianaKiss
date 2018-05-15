'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Bözsi', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Béla', 'Todd', 'Neef', 'Jeff'];

console.log(girls);

function makingMatches(female: string[], male: string[]) {
  for (let i: number = 0; i < 6; i ++) {
    female.splice(i * 2 + 1, 0, male[i]);
    }
  return female.join(', ');
}

console.log(makingMatches(girls, boys));

export = makingMatches;