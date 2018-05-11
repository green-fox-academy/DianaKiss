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

let lineCount: number = 8;

// code works fine, just needs to expand nr of spaces in variant: pyramid - not so elegant...
let pyramid: string = '        *';
let pyramidVar: string = '**';

for (let i: number = 0; i < lineCount; i ++) {

    console.log(pyramid)
    pyramid = pyramid.slice( 1 ) + pyramidVar;
}

