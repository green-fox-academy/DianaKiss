'use strict'
export {};


// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList: number [] = [1, 2, 3, 8, 5, 6];

//console.log(numList);

let updateNumList = numList.map((num: number, index: number) =>  {
  if (num !== index + 1) { 
    num = num / 2;
  }

  return num;
});

console.log(updateNumList[3]);
