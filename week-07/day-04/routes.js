'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
const path = require('path');

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
  res.sendFile(path.join(__dirname , 'views/index.html'));
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

app.post('/api/posts', (req, res) => {
  const { title, url } = req.body;
  let sql = `INSERT INTO posts (title, url) VALUES ('${req.body.title}', '${req.body.url}');`;

  conn.query(sql, (err, rows) => {
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

// app.put('/api/posts/:id/upvote', (req, res) => {
//   let id = req.params.id;
//   let sql = `UPDATE posts SET vote = 1  WHERE id = ${id};`;
//   conn.query(sql, (err, rows) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send();
//       return;
//     }
//     res.json({
//       message: 'OK',
//     });
//   });
// });


module.exports = app;
