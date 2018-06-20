'use strict';


let imgLink = document.querySelector('img').getAttribute('src');
console.log(imgLink);

let animal = 'https://www.abqtodo.com/wp-content/uploads/sites/www.abqtodo.com/images/2017/06/294f02e22611bf736644649f48a4e6da-400x400.jpg';

document.querySelector('img').setAttribute('src', animal);

document.querySelector('a').setAttribute('href', 'https://www.greenfoxacademy.com/')

document.querySelector('.this-one').disabled = true;

document.querySelector('.this-one').innerText = 'Don\'t click me';
