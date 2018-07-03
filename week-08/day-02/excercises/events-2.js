'use strict';

const kittycat = document.querySelector('button');
const liArr = document.querySelectorAll('li');

kittycat.addEventListener('click', () => {
  // console.log(liArr);
  document.querySelector('.result').innerText = liArr.length;
});
