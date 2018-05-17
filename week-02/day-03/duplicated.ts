'use strict';
export {};

// Create a method that decrypts duplicated-chars.txt

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';
let filePath: string = 'duplicated-chars.txt'
let outputPath: string = 'un-duplicated.txt';

let dString: string = '';
let dStringArr: string[] = [];


dString = fs.readFileSync(filePath, charEncoding);
let charNum: number = dString.length;
dStringArr = (dString.split(''));

for (let i: number = 0; i < charNum; i ++) {
  dStringArr.splice(i * 2, 1, '');
}
dString = dStringArr.join('');

fs.writeFileSync(outputPath, dString);
