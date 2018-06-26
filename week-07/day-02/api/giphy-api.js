'use strict';

const requestGIPHY = new XMLHttpRequest();

requestGIPHY.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=ayBR6n5t1srTyMB8z494vzsGzoZ6nead&q=cat&limit=16&offset=0&rating=G&lang=en', true); //nekunk async kell, ami true lesz
requestGIPHY.onload = () => {
  let res = JSON.parse(requestGIPHY.responseText);
  

  console.log(res.data[0].images.original_still.url);

}

requestGIPHY.send();


