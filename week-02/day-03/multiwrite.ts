'use strict';
export {};

// Create a function that takes 3 parameters: a path, a word and a number,
// than it should write to a file.
// The path parameter should be a string, that describes the location of the file.
// The word parameter should be a string, that will be written to the file as lines
// The number paramter should describe how many lines the file should have.
// So if the word is 'apple' and the number is 5, than it should write 5 lines
// to the file and each line should be 'apple'
// The function should not raise any error if it could not write the file.

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';
let wordOut: string = ''; 


function multiWrite(filePath: string, word: string, fileLines: number) {
  for (let i:number = 0; i < fileLines; i ++) {
    wordOut = wordOut + word + '\r\n';
  }
   fs.writeFileSync(filePath, wordOut);
  
}

multiWrite('multiwrite.txt', 'apple', 5);
