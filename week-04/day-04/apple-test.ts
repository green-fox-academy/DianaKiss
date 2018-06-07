'use strict';

// import { test } from 'tape';
// import { test } from 'tape';
import { Apple } from './apple';

let test = require('tape');

test('test if apple returns apple', t => {
  const newApple = new Apple();
  t.equal(newApple.getApple(),'apple');
  t.end();
})