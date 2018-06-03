'use strict';

import { summethod } from './V1Sum';

let test = require('tape');


test('add a list of integers', t => {
  let probeSum: number[] = [3, 4, 6, 7];
  const actual = summethod(probeSum);
  const expected = 20;

  t.equal(actual, expected);
  t.end();
});


test('test an empty array', t => {
  let probeSum: number[] = [];
  const actual = summethod(probeSum);
  const expected = 0;

  t.equal(actual, expected);
  t.end();
});

test('test only one number', t => {
  let probeSum: number[] = [3];
  const actual = summethod(probeSum);
  const expected = 3;

  t.equal(actual, expected);
  t.end();
});

test('test string', t => {
  let probeSum: string[] = ['string'];
  const actual = summethod(probeSum);
  const expected = console.error();

  t.equal(actual, expected);
  t.end();

});
