'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();

app.use('/static', express.static('static'));
app.set('view engine', 'ejs');
app.use(express.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  // password: ,
  database: 'reddit_database',
});

app.get('/', (req, res) => {
  res.render('index', {

  });
});

app.get('/hello', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/api/posts', (req, res) => {
  let sql = 'SELECT * from posts;';
   
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      posts: rows,
    });
  });
});

app.post('/api/post', (req, res) => {
  const {title, url} = req.body;
  let sql = `INSERT INTO posts (title, url) VALUES ('${req.body.title}', '${req.body.url}');`;
  
  console.log(title);
  console.log(url);

  conn.query( sql, (err, rows) => { 
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.json({
      message: 'OK',
    });
  });
});

module.exports = app;
