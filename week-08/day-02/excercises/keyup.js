'use strict';

// const html = document.body

function getRandomColorNum() {
  return Math.floor(Math.random() * 255);
}

html.addEventListener('keyup', (event) => {
  console.log(event);
  const color = 'rgb(' + getRandomColorNum() + ',' +
    getRandomColorNum() + ','+
    getRandomColorNum() + ')';
  document.body.style.background = color;
});
