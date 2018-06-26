'use strict';

//const requestGIPHY = new XMLHttpRequest();

console.log('kiscica');

let input = document.querySelector('#userInput').value;
console.log(input);

// requestGIPHY.open('GET', `https://api.giphy.com/v1/gifs/search?api_key=ayBR6n5t1srTyMB8z494vzsGzoZ6nead&q=${input}&limit=16&offset=0&rating=G&lang=en`, true); //nekunk async kell, ami true lesz

// requestGIPHY.onload = () => {
//   let response = JSON.parse(requestGIPHY.responseText);
//   // console.log(response.data[0].images.original_still.url);
//   const container = document.querySelector('#pics');

//   response.data.forEach(element => {
//     console.log(element.id);
//     const div = document.createElement('div');
//     const image = document.createElement('img');

//     image.src = element.images.fixed_width_still.url

//     container.appendChild(image);
//   });


// }

// requestGIPHY.send();




