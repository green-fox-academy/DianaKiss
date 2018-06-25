'use strict';

const express = require('express');
const app = express();

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/doubling', (req, res) => {
  console.log(req.query);

  // let result = {"input": req.query, "result": req.query * 2 };
  if (req.query.input) {
    res.json({
      received: +req.query.input,
      result: req.query.input * 2,
    });
  } else {
    res.json({
      error: 'Please provide an input!',
    });
  }

});



module.exports = app;
