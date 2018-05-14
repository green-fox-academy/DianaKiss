'use strict'
export {};


// -  Create a variable named `firstList`
//    with the following content: `[1, 2, 3]`
// -  Create a variable named `secondList`
//    with the following content: `[4, 5]`
// -  Log to the console if `secondList` has more elements than `firstList`

let firstList: number [] = [1, 2, 3];
let secondList: number [] = [4, 5, 6];

console.log(firstList.length, secondList.length)

if (firstList.length > secondList.length) {
  console.log(`first list is longer`);
} else if  (firstList.length = secondList.length ) {
  console.log(`first list and second list length are equal`);
} else {
  console.log(`second list is longer`);
}
