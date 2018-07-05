'use strict';

// const loveCats = document.querySelector('.loveCats');
// const signUp = document.querySelector('.signUp');

document.querySelector('.fav-type').addEventListener('click', (e) => {

  document.querySelector('.signUp').disabled = false;
  // e.preventDefault();
  // console.log(document.querySelectorAll('[value="Dog"]'));
});

document.querySelector('.signUp').addEventListener('click', (e) => {
  // console.log(document.querySelector('input[name="pet-list"]:checked').value);
  if (document.querySelector('input[name="pet-list"]:checked').value == "Dog" || document.querySelector('input[name="pet-list"]:checked').value == "Cat" ) {
  alert('Thank you, you\'ve successfully signed up for cat facts');
  // e.preventDefault();
  } else {
  alert('Sigh, we still added you to the cat facts list');
  }
});
