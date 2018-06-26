'use strict';

export {};


const words: string[] = ['map', 'reduce', 'filter'];

function removeSecondLetter(string) {
    let wordArr: string[] = string.split('');
    let outputArr: string[] = [];
    for (let i: number = 0; i < wordArr.length; i++) {
      if (i % 2 === 0) {
        outputArr.push(wordArr[i]);
        console.log(wordArr[i]);
        console.log(outputArr);
      }
    }
    let finalword = outputArr.join('');
    console.log(finalword);
  }  
  
  removeSecondLetter('kutya');