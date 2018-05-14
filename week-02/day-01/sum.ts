'use strict'
export {};

// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result



let num: number =5;

function sum(input: number ) {
  let result = (1 + num) * num / 2; 
  return result;
}

console.log(sum(num));
