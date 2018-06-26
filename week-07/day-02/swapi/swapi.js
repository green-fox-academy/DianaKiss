'use strict';

const requestSW = new XMLHttpRequest();

requestSW.open('GET', 'https://swapi.co/api/people/', true);

requestSW.onload = () => {
  let response = JSON.parse(requestSW.responseText);
  console.log(response.results[0]);
}

requestSW.send();