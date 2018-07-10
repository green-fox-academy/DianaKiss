'use strict';

function createNewCounter() {
  let count = 0;
  return () => {
    count += 1;
    return count;
  }
}

let counter = createNewCounter();
console.log(typeof counter);
console.log(counter);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
let counter2 = createNewCounter();
console.log(counter2());