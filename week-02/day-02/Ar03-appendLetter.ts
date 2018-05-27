'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far: string[] = ['kuty', 'macsk', 'kacs', 'rók', 'halacsk'];

function appendA(thingy: any[]) {
  
  console.log(`${thingy.join(`a, `)}a`);

}

appendA(far);



// The output should be: 'kutya', 'macska', 'kacsa', 'róka', 'halacska'
//export = appendA;