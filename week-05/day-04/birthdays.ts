'use strict';
export {};

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';


function readFile(filename): string {
  try {
    let fileContent: string = fs.readFileSync(filename, charEncoding);
    return fileContent;
  } catch (error) {
    console.log(`unable to read ${filename}`);
  }
}


function birthdays(filename: string) {

  let fileContent: string = readFile(filename);
  let peopleArr: string[] = (fileContent.split(/[;\n\r]+/));

  return peopleArr;

}

console.log(birthdays('births.csv'));
