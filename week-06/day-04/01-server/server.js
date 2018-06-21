'use strict';

// do gitignore, include node_modules
//we can push the package-lock.json 
// and the package.json



const express = require ('express');
//i want my server to run constantly
const path = require('path');


const app = express();
const PORT = 3000;


// this is the port that on we want to run our server


// if i want to modify my file, i have to stop and start the server again
//but not with nodemon

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/hola', (req, res) => {
  res.send('Hola¡');
});

app.get('/greet/:message', (req, res) => {
  console.log(req.query);

  let name = 'Fox';
  if (req.query.name !== undefined) {
    name = req.query.name;  
  }

  res.send(`${req.params.message}, ${req.query.name}`);
});

//if i want to pass a message i have to add a parameter


app.listen(PORT, () => {
  console.log(`yay, i\'m running on PORT ${PORT}`);
})

