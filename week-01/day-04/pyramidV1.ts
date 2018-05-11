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
let pyramid: string = '*';
let pyramidVar: string = '**';
let space: string = ' '

// let's try to set up pyramid space-length
for (let j: number = 0; j < lineCount; j++) {
    pyramid = space + pyramid
}


for (let i: number = 0; i < lineCount; i ++) {
    console.log(pyramid)
    pyramid = pyramid.slice( 1 ) + pyramidVar;
}

