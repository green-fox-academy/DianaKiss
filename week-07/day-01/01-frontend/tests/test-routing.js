'use strict';

const test = require('tape');
const request = require('supertest');

const app = require('../routes');

test('testing doubling', (t) => {
  request(app)
    .get('/doubling')
    .expect('Content-Type', /json/) //ezt azert irom bele, hogy ha nem json kapok vissza, akkor baj van
    .expect(200, { error: 'Please provide an input!' }) //200 HTTP STATUS CODE OK
    .end((err) => {
      t.error(err, 'no error'); //nem szoktuk a no error-t odairni, mivel ilyenkor lefut a teszt (de ide lehetne irni)
      t.end();
    })
});

test('testing doubling', (t) => {
  request(app)
    .get('/doubling/?input=5')
    .expect('Content-Type', /json/) //ezt azert irom bele, hogy ha nem json kapok vissza, akkor baj van
    .expect(200, { received: 5, result: 10 }) //200 HTTP STATUS CODE OK
    .end((err) => {
      t.error(err, 'no error'); //nem szoktuk a no error-t odairni, mivel ilyenkor lefut a teszt (de ide lehetne irni)
      t.end();
    })
});
