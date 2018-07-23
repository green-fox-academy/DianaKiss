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

app.get('/api/questions', (req, res) => {
  const sql = 'SELECT * FROM quiz_app.questions;'; 
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      questions: rows,
    });
  });
});

app.get('/api/game', (req, res) => {
  const qID = 'SELECT id FROM quiz_app.questions;'
  conn.query(qID, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    // res.json(rows);

    let rand = Math.floor(Math.random()*rows.length); 
    const randomQuestionID = rows[rand].id

    const sql = `SELECT * FROM questions LEFT JOIN answers ON answers.question_id = questions.id WHERE questions.id = "${randomQuestionID}";`; 
    conn.query(sql, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      }
      res.json({
        questions: rows,
      });
    });
  });
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/manage', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/manage.html'));
});

module.exports = app;
