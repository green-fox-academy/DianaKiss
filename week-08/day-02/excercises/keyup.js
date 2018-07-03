'use strict';

const html = document.querySelector('html')

function getRandomColorNum() {
  return Math.floor(Math.random() * 255);
}

html.addEventListener('keyup', (event) => {
  console.log(event);
  const color = 'rgb(' + getRandomColorNum() + ',' +
    getRandomColorNum() + ',' +
    getRandomColorNum() + ')';
  document.body.style.background = color;

  document.querySelector('h1').innerText = `Last pressed key code is: ${event.keyCode}`;
  document.querySelector('h1').style.color = `rgb(${getRandomColorNum()}, ${getRandomColorNum()}, 0)`;
})