'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.use('/static', express.static('static'));
app.set('view engine', 'ejs');

const counter = () => {
  let iArr = [];
  for(let i = 0; i < 100; i++) {
        iArr.push(i + 1);
    return iArr;  
  }
}

app.get('/', (req, res) => {
  res.render('index', {
    iArr: counter()
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

