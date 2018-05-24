'use strict';

// Write a recursive function that takes one parameter: n and counts down from n.

function counter(n) {
  if (n === 0) {
    console.log(0);
  } else {
    console.log(n);
    counter(n - 1);
  }
}

function counterV2(n: number) {
  console.log(n);
   if (n !== 0) {
    counter(n - 1);    
  }
}

function counterI(n: number) {
  for (let i: number = n; i >= 0; i--) {
    console.log(i);
  }
}

counter(5);
