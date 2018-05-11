'use strict';
export {};

let lineCount: number = 4;
let triangle: string = '*';
let triangleVar: string = '*';

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is


for (let i: number = 0; i < lineCount; i++ ) {

    console.log(triangleVar);
    triangleVar = triangleVar + triangle;

}

