'use strict';
export { };

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
  let peopleArr: any[] = (fileContent.split(/[-;\n\r]+/));
  let dateArr: number[] = [];

  for (let i: number = 0; i < peopleArr.length; i++) {
    if (i % 5 === 1) {
      dateArr.push(peopleArr[i]);
    }
  }
    
  dateArr = dateArr.sort();
  let counts: object = {};
  for (let i = 0; i < dateArr.length; i++) {
      let date: number = dateArr[i];
      counts[date] = counts[date] ? counts[date] + 1 : 1;
  }

  let final: any[][] = []
  for (let year in counts) {
    final.push([year, counts[year]]);
    final.sort(function (a, b) {
      return a[1] - b[1];
    });
  }

 return final[final.length -1][0];

}

console.log(birthdays('births.csv'));
