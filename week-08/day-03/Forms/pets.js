'use strict';

// const loveCats = document.querySelector('.loveCats');
// const signUp = document.querySelector('.signUp');

document.querySelector('.fav-type').addEventListener('click', (e) => {

  document.querySelector('.signUp').disabled = false;
  // e.preventDefault();
  console.log(document.querySelectorAll('[value="Dog"]'));
});

document.querySelector('.signUp').addEventListener('click', (e) => {
  if (e.target.elements.fav-type.value == "Dog" || e.target.elements.fav-type.value == "Cat") {
  alert('Thank you, you\'ve successfully signed up for cat facts');
  // e.preventDefault();
  } else {
  alert('Sigh, we still added you to the cat facts list');

  }
});
