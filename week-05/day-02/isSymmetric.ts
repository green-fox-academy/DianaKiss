'use strict';
export { };


// Create a function named `isSymmetric` that takes an n×n integer matrix (two dimensional array) as parameter
// and returns true, if is that matrix is symmetric (diagonally from top-left to bottom-right)
// or false if it is not
//
// example for symmetric matrix:
// 1 0 1
// 0 2 2
// 1 2 5
//
// example for not symmetric matrix

let nonSymmetric: number[][] = [
 [7, 7, 7],
 [6, 5, 7],
 [1, 2, 1]
];
let symmetricMatrix: number[][] = [
  [1, 0, 1],
  [0, 2, 2],
  [1, 2, 5]
];

function isSymmetric(anyArr: number[][]) {
  
  let arrX: number = 0;
  let arrY: number = 0;
  for (let i: number = 0; i < anyArr.length; i++) {
    for (let j: number = 0; j < anyArr.length; j++) {
      if (anyArr[i][j] !== anyArr[j][i]) {
        return false
      } 
    }
  }
  return true
}

console.log(isSymmetric(symmetricMatrix));
console.log(isSymmetric(nonSymmetric));
