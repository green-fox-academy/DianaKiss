'use strict';

const button = document.querySelector('.first');
const input = document.querySelector('input[type="text"]');

function getRandomColorNum() {
  return Math.floor(Math.random() * 255);
}

button.addEventListener('click', (event) => {
  console.log(event);
  const color = 'rgb(' + getRandomColorNum() + ',' +
    getRandomColorNum() + ','+
    getRandomColorNum() + ')';
  document.body.style.background = color;
});

button.dispatchEvent(new Event('click'));
