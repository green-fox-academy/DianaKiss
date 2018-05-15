'use strict';

// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';
let otherStuff: string = 'abajabozsolah a pap a ludni';


export = rev;

function rev(array) {
  let strArray: any[] = array.split('');
  strArray.reverse();
  return strArray.join('');
  
} 

console.log(rev(reversed));
console.log(rev(otherStuff));



