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
      error: 'Please provide a title!',
    });
  } else if (req.query.title) {
    res.json({
      error: 'Please provide a name!',
    });
  } else {
    res.json({
      error: 'Please provide a name!',
    });
  }
});

app.get('/appenda/:appendable', (req, res) => {
  console.log(req.params); //ha :-ez .params lesz / ha ?-lel adom be az inputut, -ez .query-lesz. !!!!!
  res.json({
    appended: `${req.params.appendable}a`,
  });

});

app.post('/dountil/:what', (req, res) => {
  console.log(req.params);
  if (req.params.what = 'sum') {
    console.log(req.body);

    res.json({
     
      error: 'sum'
    });
  } else if (req.params.what = 'factor') {
    res.json({
      error: 'factor'
    });
  } else {
    res.json({
      error: 'Please provide a number!'
    });
  }

});


module.exports = app;
