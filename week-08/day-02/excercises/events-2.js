'use strict';

const button = document.querySelector('button');
const liArr = document.querySelectorAll('li');

button.addEventListener('click', (event) => {
  console.log(liArr.length);
  document.querySelector('.result').innerText = liArr.length;
});
