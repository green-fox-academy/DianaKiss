'use strict';

const express = require('express');
const app = express();

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/doubling', (req, res) => {
  console.log(req.query);
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

app.get('/greeter', (req, res) => {
  console.log(req.query);
  let welcome_message = `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`;
  res.json({ welcome_message });

});



module.exports = app;
