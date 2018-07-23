'use strict'


const http = new XMLHttpRequest();
http.open('GET', 'http://localhost:3000/api/game')

http.onload = () => {
  let response = JSON.parse(http.responseText);
  let quizPlace = document.createElement('form');

  console.log(response.questions[0].question);

  quizPlace.innerHTML = `<p class="question">${response.questions[0].question}</p>`;
  document.querySelector('main').appendChild(quizPlace);
  
  // quizPlace.innerHTML = `<button>${element.answer}</button>`;

  response.questions.forEach(element => {
    
    console.log(element.answer);
    quizPlace.innerHTML = `
    <button>Yes</button>
    <button>No</button>
    <button>Probably</button>
    <button>It's a platypus</button>`;

    document.querySelector('main').appendChild(quizPlace);
    

  });

}


http.send();
