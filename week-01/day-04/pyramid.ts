'use strict';
export {};



// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let lineCount: number = 4;
let pyramid: string = '**';
let pyramidVar: string = '*';
let space: string = '_';
let spaceVar: string = ' ';

for (let j: number = lineCount; j > 0; j--) {
    console.log(space);
    console.log(j);
}

for (let i: number = 0; i < lineCount; i++) {

    console.log(space pyramidVar);
    pyramidVar = pyramidVar + pyramid;
}

