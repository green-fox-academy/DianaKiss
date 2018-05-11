'use strict';
export {};



// Write a program that draws a square like this:
//
// %%%%%
// %   %
// %   %
// %   %
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is


let lineCount: number = 6;
let percentChar: string = "%";
let space: string = ' ';
let sqTop: string = '%';
let sqSideLine: string = '%';


// let's make the squareTop var
for (let j: number = 0; j < lineCount - 1; j ++) {
    sqTop = sqTop + percentChar;
}

//do the squareSideLine

for (let i: number = 0; i < lineCount - 2; i++) {
    sqSideLine = sqSideLine + space;
}
sqSideLine = sqSideLine + percentChar

//draw the actual square

console.log(sqTop);
for (let k:number = 0; k < lineCount - 2; k++) {
    console.log(sqSideLine);
}
console.log(sqTop);



