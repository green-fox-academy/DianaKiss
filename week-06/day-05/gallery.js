const express = require('express');
const app = express();
const PORT = 3000;
app.use('/static', express.static('static'));


app.set('view engine', 'ejs');

let images = [
 {imgName: 'img1', path: '/static/img/20171113_090003.jpg'},
 {imgName: 'img2', path: '/static/img/20171121_145001.jpg'},
 {imgName: 'img3', path: '/static/img/20171129_160615(0).jpg'},
 {imgName: 'img4', path: '/static/img/20171210_031729.jpg'},
 {imgName: 'img4', path: '/static/img/20180103_205031.jpg'},
 {imgName: 'img4', path: '/static/img/20180118_151112.jpg'},
 {imgName: 'img4', path: '/static/img/20180201_081303.jpg'},
 {imgName: 'img4', path: '/static/img/20180223_130656.jpg'},
 {imgName: 'img4', path: '/static/img/20180315_080032.jpg'},
 {imgName: 'img4', path: '/static/img/20180321_162728.jpg'},
 {imgName: 'img4', path: '/static/img/20180415_144244.jpg'},
];


app.get('/', (req, res) => {
  res.render('index', {
    images,
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});