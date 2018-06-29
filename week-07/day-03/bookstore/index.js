'use strict';

//require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

app.use('/static', express.static('static'));
app.set('view engine', 'ejs');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  // password: ,
  database: 'bookstore',
});

app.get('/booknames', (req, res) => {
  let sql = 'SELECT book_name from book_mast;'
   
  conn.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }

    res.render('index', {
       
    });
    // res.json({
    //   book_names: rows,
    // });
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
