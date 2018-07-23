'use strict';

const move = document.querySelectorAll('[data-action="move"]'); //data-action = move
const zoom = document.querySelectorAll('[data-action="zoom"]'); //data-action = zoom
const img = document.querySelector('.img-inspector');
console.log(move);


move.addEventListener('click', (event) => {
  console.log(event);
  console.log(move);

  switch (event) {
    case event:

    break;

    case event:
    break;

  }
}); 


/*
const nav = document.querySelector('nav');
const img = document.querySelector('.img-inspector');
console.log(img.style);
nav.addEventListener('click', (e) => {
  if (e.target.getAttribute('data-direction') === 'up') {
    img.style.backgroundPosition = '0 10px';
  } else if (e.target.getAttribute('data-direction') === 'down') {
    img.style.backgroundPosition = "0 -10px";
  } else if (e.target.getAttribute('data-direction') === 'left') {
    img.style.backgroundPosition = "10px 0";
  } else if (e.target.getAttribute('data-direction') === 'right') {
    img.style.backgroundPosition = "-10px 0";
  }
})

nav.addEventListener('click', (e) => {
  if (e.target.getAttribute('data-direction') === 'in') {
    img.style.backgroundSize = '240%';
  } else if (e.target.getAttribute('data-direction') === 'out') {
    img.style.backgroundSize = "160%";
  }
})
*/