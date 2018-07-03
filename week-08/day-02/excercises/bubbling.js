'use strict';

const move = document.queryselector('[data-action]'); //data-action = move
// const zoom = document.querySelector('.zoom'); //data-action = zoom

console.log(move);


move.addEventListener('click', (event) => {
  console.log(event);
}); 