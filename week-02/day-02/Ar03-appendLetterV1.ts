'use strict';
export {};
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far: string[] = ['kuty', 'macsk', 'kacs', 'rók', 'halacsk'];

function appendA(thingy: string[]) {
  for (let i: number = 0; i < thingy.length; i ++) {
    thingy[i] = thingy[i]+`a`;
  }
  return thingy.join(', ');
}

console.log(appendA(far));
