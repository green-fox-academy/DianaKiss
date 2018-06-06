'use strict';
export { };

// There is a not so family friendly text in the `content.txt`
// Create a function named familyFriendlizer that takes a filename and a list of strings as parameters
// and remove all the given words from the file and returns the amount of the removed words.

declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';

let offensiveWords: string[] = ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss'];

function familyFriendlizer(filename: string, wordlist: string[]): number {

  let fileContent: string = fs.readFileSync(filename, charEncoding);
  let filePlain: string[] = (fileContent.split(' '));
  let counter: number = 0;
  let FFcontent: string = '';

  //not using this right now // let fileArr: string[] = (fileContent.split(/[ ,.\n\r]+/));    //regex to split the filecontent to separate words

  // for loop creates a family friendly version a content.txt by removing all the S-words
  for (let j: number = 0; j < filePlain.length; j++) {
    for (let i: number = 0; i < offensiveWords.length; i++) {
      if (filePlain[j] === offensiveWords[i] ||
        filePlain[j] === offensiveWords[i].charAt(0).toUpperCase() + offensiveWords[i].slice(1).toLowerCase()
      ) {
        filePlain[j] = ' ';
        counter++;
      }
    }
  }

  FFcontent = filePlain.join(' ');
  fs.writeFileSync('FFcontent.txt', FFcontent);
  return counter;
}
console.log(familyFriendlizer('content.txt', offensiveWords));


//console.log(familyFriendlizer('content.txt', offensiveWords)); // should print out 17
