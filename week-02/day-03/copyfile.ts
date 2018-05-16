'use strict';
export {};

// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';

function readWrite(sourcePath: string, destPath: string) {
  try {
    let fileContent = fs.readFileSync(sourcePath, charEncoding);
    fs.writeFileSync(destPath, fileContent);
    console.log(true);
  } catch(error) {
    console.log(false);
  }
}

readWrite('myfile.txt', 'copier.txt');
