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
  if (req.query.name && req.query.title) {
    console.log(req.query);
    let welcome_message = `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`;
    res.json({ welcome_message });
  } else if (req.query.name) {
    res.json({ 
      error: 'Please provide a title',
     });
  } else if (req.query.title) {
    res.json({ 
      error: 'Please provide a name',
     });
  } else {
    res.json({ 
      error: 'Please provide name and title',
     });
  }
});



module.exports = app;
