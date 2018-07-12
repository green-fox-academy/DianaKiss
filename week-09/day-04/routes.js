'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
const path = require('path');

app.use('/static', express.static('static'));
// app.set('view engine', 'ejs');
app.use(express.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'quiz_app',
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

module.exports = app;