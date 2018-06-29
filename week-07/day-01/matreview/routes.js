const express = require('express');
const app = express();

let cars = [
  { id: 1, brand: 'BMW', type: 'X6' },
  { id: 2, brand: 'Audi', type: 'TT' },
];

let myJSON = '{ "name":"John", "age":31, "city":"New York" }';

app.use(express.json());

app.get('/ping', (req, res) => {
  res.json({
    message: 'pong',
  });
});

app.get('/john', (req, res) => {
  res.json({
   myJSON,
  });
});

app.get('/api/cars', (req, res) => {
  res.json({
    message: cars, // cars: cars
  });
});

app.delete('/api/cars', (req, res) => {
  cars.pop();
  res.json({
    message: 'Car has been deleted.',
  });
});

app.delete('/api/cars/:id', (req, res) => {
  let carIndex = -1;
  cars.forEach((car, index) => {
    if (car.id === parseInt(req.params.id)) {
      carIndex = index;
    }
  });

  let message = '';
  if (carIndex !== -1) {
    cars.splice(carIndex, 1);
    message = 'Car has been deleted.';
  } else {
    message = 'This car is not in the array';
  }

  res.json({
    message, // message: message
  });
});

app.post('/api/cars', (req, res) => {
  const { brand, type } = req.body;
  cars.push({
    id: cars.length + 1,
    brand,
    type,
  });

  res.json({
    message: 'OK',
  });
});

module.exports = app;
