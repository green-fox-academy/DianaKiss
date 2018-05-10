'use strict';
export {};

// Swap the values of these variables
let a: number = 123;
let b: number = 526;

console.log(a);
console.log(b);

[a, b] = [b, a];

console.log(a);
console.log(b);


// having some more fun

let c: number = 3;

[a, b, c] = [c, a, b];

console.log(a);
console.log(b);
console.log(c);
