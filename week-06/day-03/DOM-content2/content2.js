'use strict';

let anyArray = ['apple', 'banana', 'cat', 'dog'];

document.querySelectorAll('li').forEach((element, index) => {
  element.innerText = anyArray[index];
  console.log(element);
});