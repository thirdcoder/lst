'use strict';

var test = require('tape');
var bts2n = require('balanced-ternary').bts2n;
var shift_left = require('./').shift_left;

test('shift left carry zero', function(t) {
  t.equal(shift_left(0, 0), 0);
  t.equal(shift_left(1, 0), bts2n('10'));
  t.equal(shift_left(-1, 0), bts2n('i0'));
  t.equal(shift_left(bts2n('111iii'), 0), bts2n('111iii0'));
  t.end();
});

test('shift left carry', function(t) {
  t.equal(shift_left(bts2n('100'), -1), bts2n('100i'));
  t.equal(shift_left(bts2n('111iii'), 1), bts2n('111iii1'));
  t.end();
});
