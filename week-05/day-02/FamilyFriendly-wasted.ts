'use strict';
export {};

// There is a not so family friendly text in the `content.txt`
// Create a function named familyFriendlizer that takes a filename and a list of strings as parameters
// and remove all the given words from the file and returns the amount of the removed words.

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';

let offensiveWords: string[] = ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss'];

function familyFriendlizer(filename: string, wordlist: string[]): any {

  offensiveWords = offensiveWords.sort().reverse(); //sort is needed so similar but longer words get replaced in a correct way (fuck / fucker not to KISCICAer) 
  
  let fileContent: string = fs.readFileSync(filename, charEncoding);
  let filecontentFF: string = fileContent;

  let fileArr: string[] = (fileContent.split(/[ ,.\n\r]+/));    //regex to split the filecontent to separate words
  let counter: number = 0;

  // for loop creates a family friendly version a content.txt by removing all upper/lowercase S-words
  for (let j: number = 0; j < fileArr.length; j ++) {
    for(let i: number = 0; i < offensiveWords.length; i ++ ) {
      filecontentFF = filecontentFF.replace(offensiveWords[i], 'KISCICA');
      filecontentFF = filecontentFF.replace(offensiveWords[i].charAt(0).toUpperCase() + offensiveWords[i].slice(1).toLowerCase(), 'KISCICA');  
    }
  }

  fs.writeFileSync('FFcontent.txt', filecontentFF);

  // another loopy loop counts the S-words
  for (let i: number = 0; i < offensiveWords.length; i++) {
    for (let j: number = 0; j < fileArr.length; j++) {
      if (fileArr[j] === offensiveWords[i] ||
        fileArr[j] === offensiveWords[i].charAt(0).toUpperCase() + offensiveWords[i].slice(1).toLowerCase()
      ) {
        counter++;
      }
    }
  }
  return counter
}

console.log(familyFriendlizer('content.txt', offensiveWords)); // should print out 17
