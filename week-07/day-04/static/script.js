'use strict';

console.log('kiscica');

//ide kene xml http requesteket kesziteni

// get /api/posts mint pl a giphy

const http = new XMLHttpRequest();
http.open('GET', 'http://localhost:3000/api/posts/')

http.onload = () => {
  let response = JSON.parse(http.responseText);
  console.log(response);

  response.posts.forEach(element => {
    console.log(element.title);
    let vote = document.createElement('button');
    let myDiv = document.createElement('div');

    vote.innerHTML = '';
    vote.setAttribute('class', 'voter up');
    vote.innerHTML = '';
    vote.setAttribute('class', 'voter down');

    myDiv.innerHTML = `<h3>${element.title}</h3>`;
    myDiv.setAttribute('class', 'postcontainer')
    document.querySelector('article').appendChild(myDiv);






    // const title = document.createElement('img');
    // image.src = element.images.fixed_width_still.url
    // document.createElement('div');
    // container.appendChild('div');
    // document.querySelector('div').innerText = element.title;

  });

}

http.send();