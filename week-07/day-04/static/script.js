'use strict';

console.log('kiscica');

//ide kene xml http requesteket kesziteni

// get /api/posts mint pl a giphy

const http = new XMLHttpRequest();
http.open('GET', 'http://localhost:3000/api/posts/' )

http.onload = () => {
  let response = JSON.parse(http.responseText);
  console.log(response);

  response.posts.forEach(element => {
    console.log(element.title);
    // const div = document.createElement('div');
    // const image = document.createElement('img');

    // image.src = element.images.fixed_width_still.url

    // container.appendChild(image);
  });

} 

http.send();