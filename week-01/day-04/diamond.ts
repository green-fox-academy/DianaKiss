'use strict';
export {};

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is


let lineCount: number = 7;
let diamond: string = '*';
let diamondVar: string = '**';
let space: string = ' ';

// let's try to set up diamond space-length
for (let j: number = 0; j < lineCount; j++) {
    diamond = space + diamond
}


// found .slice       str.slice(beginIndex[, endIndex])

for (let i: number = 0; i < lineCount; i ++) {
    console.log(diamond);
    diamond = diamond.slice( 1 ) + diamondVar;
}

diamond = space + diamond.slice( 0 , -2 );

for (let k: number = 1; k < lineCount ; k ++) {
   
    diamond = space + diamond.slice( 0 , -2 );
    console.log(diamond);
}
