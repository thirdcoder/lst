'use strict';

var test = require('tape');
var bts2n = require('balanced-ternary').bts2n;
var shift_left = require('./').shift_left;

test('shift left', function(t) {
  t.equal(shift_left(0), 0);
  t.equal(shift_left(1), bts2n('10'));
  t.equal(shift_left(-1), bts2n('i0'));
  t.equal(shift_left(bts2n('111iii')), bts2n('111iii0'));
  t.end();
});

test('shift left carry', function(t) {
  t.equal(shift_left(bts2n('i01'), 0), bts2n('i010'));
  t.equal(shift_left(bts2n('100'), -1), bts2n('100i'));
  t.equal(shift_left(bts2n('111iii'), 1), bts2n('111iii1'));
  t.end();
});

test('shift left repeated', function(t) {
  var shl = shift_left;
  t.equal(shl(shl(shl(bts2n('i01'), 0), 0), 0), bts2n('i01000'));
  t.equal(shl(shl(shl(bts2n('i01'), 1), 1), 1), bts2n('i01111'));
  t.equal(shl(shl(shl(bts2n('i01'),-1),-1),-1), bts2n('i01iii'));

  t.equal(shl(shl(shl(bts2n('10i'), 0), 0), 0), bts2n('10i000'));
  t.equal(shl(shl(shl(bts2n('10i'), 1), 1), 1), bts2n('10i111'));
  t.equal(shl(shl(shl(bts2n('10i'),-1),-1),-1), bts2n('10iiii'));

  t.equal(shl(shl(shl(bts2n('10i'),-1), 0), 1), bts2n('10ii01'));

  t.end();
});
