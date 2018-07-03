'use strict';

const button = document.querySelector('button');
function getRandomColorNum() {
  return Math.floor(Math.random() * 255);
}

// first solution disabling buton on the first click
// button.addEventListener('click', (event) => {
//   console.log(event.timeStamp);
//   document.querySelector('html').style.background = `rgb(0, ${getRandomColorNum()}, ${getRandomColorNum()})`;
//   document.querySelector('button').setAttribute.disabled = true;
// });

// second solution is not disabling the button
let clickCounter = 0;
button.addEventListener('click', (event) => {
  clickCounter = clickCounter + 1;
  if (clickCounter < 2) {
    console.log(event.timeStamp);
    document.querySelector('html').style.background = `rgb(0, ${getRandomColorNum()}, ${getRandomColorNum()})`;
    document.querySelector('button').setAttribute.disabled = true;
  }
});
