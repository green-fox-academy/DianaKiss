'use strict';
export {};

let a: number = 24;
let out: number = 0;

// if a is even increment out by one
console.log('a');
console.log(out);
if (a % 2 === 0) {
    out = out + 1
}
console.log(out);


let b: number = 13;
let out2: string = '';

// if b is between 10 and 20 set out2 to "Sweet!"
// if less than 10 set out2 to "Less!",
// if more than 20 set out2 to "More!"

console.log('b');
console.log(out2);
if (b < 20 && b > 10) {
    out2 = 'Sweet!';
} else if (b > 20) {
    out2 = 'More!';
} else {
    out2 = 'Less!';
}
console.log(out2);

console.log('c');
let c: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

// if credits are at least 50,
// and is_bonus is false decrement c by 2

// if credits are smaller than 50,
// and is_bonus is false decrement c by 1

// if is_bonus is true c should remain the same
console.log(c);

if (isBonus) {
    } else if (credits > 50) {
    c = c - 2;
} else {
    c = c -1;
}


console.log(c);







let d: number =  8;
let time: number = 120;
let out3: string = '';

// if d is dividable by 4
// and time is not more than 200
// set out3 to "check"
// if time is more than 200
// set out3 to "Time out"
// otherwise set out3 to "Run Forest Run!"
console.log(out3);