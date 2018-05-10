'use strict';
export {};

let a: number = 3;
// make it bigger by 10
console.log(a + 10);

let b: number = 100;
// make it smaller by 7
console.log(b - 7);

let c: number = 44;
// double c's value
console.log(c * 2);

let d: number = 125;
// divide d's value by 5
console.log(d / 5);

let e: number = 8;
// what's the cube of e's value?
console.log(e ** 2);

let f1: number = 123;
let f2: number = 345;
// tell if f1 is bigger than f2 (as a boolean)

console.log('is f1 > f2?');
if (f1 > f2) {
    console.log(true);

} else {
    console.log(false);
}

let g1: number = 350;
let g2: number = 200;

// tell if the double of g2 is bigger than g1 (pras a boolean)

console.log('is g2 * 2 > g1?');
if (g2 * 2 > g1) {
    console.log(true);
} else {
    console.log(false);
}

let h: number = 1357988018575474;
// tell if h has 11 as a divisor (as a boolean)

console.log('is h has 11 as a divisor?');
console.log(h % 11)

if (h % 11 === 0) {
    console.log(true);
} else {
    console.log(false);
}

let i1: number = 10;
let i2: number = 3;
/* tell if i1 is higher than i2 squared 
and smaller than i2 cubed 
(as a boolean)
own notes: (i2 ** 2 < i1 < i2 ** 3)
*/
console.log('is i1 smaller than i2**3? is i1 greater than i2**2?')

if (i1 < i2 ** 3 && i1 > i2 ** 2) {
    console.log(true);
} else {
    console.log(false);
}


let j: number = 1521;
// tell if j is dividable by 3 or 5 (as a boolean)

console.log('is j dividable by 3 or 5 ?')
if (j % 3 === 0 || j % 5 === 0) {
    console.log(true);
} else {
    console.log(false);
}

let k: string = 'Apple';
// fill the k variable with its content 4 times
console.log(k);

k = k+k+k+k

console.log(k);

k = 'Apple2'
console.log(k);
for (let q: number =0; q < 2; q++) {
    
    console.log(k = k + k);
}
/* this loop should do the trick for 4 * k string, 
but will not work if it's eg. 5 times. 
*/
