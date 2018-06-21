'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.use('/static', express.static('static'));

app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//   // render `home.ejs`
//   res.render('home');
// });

app.get('/', (req, res) => {
  
  let name = 'Guest';
  if (req.query.name !== undefined) {
  name = req.query.name;  
  }
  
  res.render('home', {
    name: name, 
    text: 'this is some text here...',
    
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});