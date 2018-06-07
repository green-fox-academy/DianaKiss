'use strict';

// import { test } from 'tape';
import { Integers } from './sum';

let test = require('tape');


test('test array addition', t => {
  const newSum = new Integers([]);
  t.equal(newSum.add(this.newSum), 0);
  t.end();
})