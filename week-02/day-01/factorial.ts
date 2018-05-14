'use strict'
export {};

// -  Create a function called `factorio`
//    that returns it's input's factorial


function factorio(num) {
  if (num === 0 || num === 1)
    return 1;
  for (let i: number = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

console.log(factorio(3));


