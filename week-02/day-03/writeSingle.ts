'use strict';
export {};

// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 
// 'Unable to write file: my-file.txt'


declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8'

/*
let filePath: string = 'writefile.txt';
let content: string = 'Diana Kiss - this is a single line';
 */


function writeTo(filePath: string, content: string) {
  try {
    fs.writeFileSync(filePath, content);
  } catch(error) {
    console.log(`unable to write ${filePath}`);
  }  
}

writeTo('writefile.txt', 'hnvfeuignrhei');
