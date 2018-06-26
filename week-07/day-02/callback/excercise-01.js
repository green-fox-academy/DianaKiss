'use strict';

const mapwith = (array, callback) => {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]))
  };

  // The mapWith() function should iterate over the given array and call the callback function on every element.
  // It stores the callback return values in the output.
  // The mapWith() should return with the output array.

  return output
}

const addOne = (number) => {
  return number + 1;
}

// Exercise 1:

console.log(mapwith([1, 2, 3], addOne));
//expected result: [2, 3, 4]



// // Exercise 2:
// // Create a callback function which remove every second letter from a string

let words = ['map', 'reduce', 'filter'];


// function removeSecondLetter(string) {
//     let wordArr = string.split('');
//     let outputArr = [];
//     for (let i = 0; i < wordArr.length; i++) {
//       if (i % 2 === 0) {
//         outputArr.push(wordArr[i]);
//         //console.log(wordArr[i]);
//         //console.log(outputArr);
//       }
//     }
//     let finalword = outputArr.join('');
//     console.log(finalword);
//   }





const removeSecondLetter = (string) => {
  let wordArr = string.split('');
  let outputArr = [];
  for (let i = 0; i < wordArr.length; i++) {
    if (i % 2 === 0) {
      outputArr.push(wordArr[i]);
      //console.log(wordArr[i]);
      //console.log(outputArr);
    }
  }
  let finalword = outputArr.join('');
  console.log(finalword);
}

removeSecondLetter('kutya');




console.log(mapwith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']
