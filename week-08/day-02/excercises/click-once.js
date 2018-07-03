'use strict';

const button = document.querySelector('button');
function getRandomColorNum() {
  return Math.floor(Math.random() * 255);
}

button.addEventListener('click', (event) => {
  console.log(event.timeStamp);
  document.querySelector('html').style.background = `rgb(0, ${getRandomColorNum()}, ${getRandomColorNum()})`;
  document.querySelector('button').disabled = true;
});


