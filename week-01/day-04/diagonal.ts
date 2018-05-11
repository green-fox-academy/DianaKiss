'use strict';
export {};

// Write a program that draws a
// square like this:
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is


let lineCount: number = 6;
let percentChar: string = '%';
let space: string = ' ';
let sqTop: string = '%';
let sqSide1: string = '1';
let sqSide2: string = '2';
let sqSLine: string = '';

// let's make the squareTop var again
for (let i: number = 0; i < lineCount - 1; i++) {
    sqTop = sqTop + percentChar;
}
console.log(sqTop);


//do the squareSideLines

for (let i: number = 0; i < lineCount - 2; i++) {
    sqSide1 = sqSide1 + percentChar; // here i need to add space i-1 times in the middle
    // here i have to define sqSide2
    console.log(sqSide1);
    console.log(sqSide2);
    
}





/*draw the actual square

console.log(sqTop);
for (let k:number = 0; k < lineCount - 2; k++) {
    console.log(sqSideLine);
}
console.log(sqTop);
*/
