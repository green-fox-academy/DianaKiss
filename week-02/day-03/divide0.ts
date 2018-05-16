'use strict';
export {};

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divider(a: number) {
  if (a === 0) {
    throw new Error(`fail`);
  }
  return 10 / a;
}

console.log(divider(3));
console.log(divider(0));
