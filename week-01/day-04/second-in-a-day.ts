'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let daySec: number = 86400

console.log(daySec - currentSeconds - currentMinutes * 60 - currentHours * 60 * 60)
