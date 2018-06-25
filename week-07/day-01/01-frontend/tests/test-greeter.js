'use strict';

const test = require('tape');
const request = require('supertest');

const app = require('../routes');


test('testing error name & title not set', (t) => {
  request(app)
    .get('/greeter')
    .expect('Content-Type', /json/) //ezt azert irom bele, hogy ha nem json kapok vissza, akkor baj van
    .expect(200, { error: 'Please provide name and title' }) //200 HTTP STATUS CODE OK
    .end((err) => {
      t.error(err, 'no error'); //nem szoktuk a no error-t odairni, mivel ilyenkor lefut a teszt (de ide lehetne irni)
      t.end();
    })
});

test('testing greeter name & title set', (t) => {
  request(app)
    .get('/greeter/?name=Petike&title=student')
    .expect('Content-Type', /json/) //ezt azert irom bele, hogy ha nem json kapok vissza, akkor baj van
    .expect(200, { welcome_message: 'Oh, hi there Petike, my dear student!' }) //200 HTTP STATUS CODE OK
    .end((err) => {
      t.error(err, 'no error'); //nem szoktuk a no error-t odairni, mivel ilyenkor lefut a teszt (de ide lehetne irni)
      t.end();
    })
});