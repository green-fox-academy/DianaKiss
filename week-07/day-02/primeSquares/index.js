'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.use('/static', express.static('static'));
app.set('view engine', 'ejs');

function counter() {
  
  for(let i =0; i < 100; i++) {
    return i;
  }
}

app.get('/', (req, res) => {
  res.render('index', {

  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

