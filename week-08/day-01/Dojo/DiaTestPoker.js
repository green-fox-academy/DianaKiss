'use strict';

const test = require('tape');
const whoIsTheWinner = require('./DiaPoker');

test('first test', (t) => {

const blackHand = [[2, 'H'], [3, 'D'], [5, 'S'], [9, 'C'], ['K', 'D']];
const whiteHand = [[2, 'C'], [3, 'H'], [4, 'S'], [8, 'C'], ['A', 'H']];
const actual = whoIsTheWinner();
const expected = 'White wins';


  t.equal();
  t.end();

});