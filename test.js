'use strict';

var test = require('tape');
var bts2n = require('balanced-ternary').bts2n;
var shl = require('./').shl;
var shr = require('./').shr;

  test('shift left zero', function(t) {
  t.equal(shl(0, 0), 0);
  t.equal(shl(1, 0), bts2n('10'));
  t.equal(shl(-1, 0), bts2n('i0'));
  t.equal(shl(bts2n('111iii'), 0), bts2n('111iii0'));
  t.end();
});

test('shift left carry', function(t) {
  t.equal(shl(bts2n('i01'), 0), bts2n('i010'));
  t.equal(shl(bts2n('100'), -1), bts2n('100i'));
  t.equal(shl(bts2n('111iii'), 1), bts2n('111iii1'));
  t.end();
});

test('shift left repeated', function(t) {
  t.equal(shl(shl(shl(bts2n('i01'), 0), 0), 0), bts2n('i01000'));
  t.equal(shl(shl(shl(bts2n('i01'), 1), 1), 1), bts2n('i01111'));
  t.equal(shl(shl(shl(bts2n('i01'),-1),-1),-1), bts2n('i01iii'));

  t.equal(shl(shl(shl(bts2n('10i'), 0), 0), 0), bts2n('10i000'));
  t.equal(shl(shl(shl(bts2n('10i'), 1), 1), 1), bts2n('10i111'));
  t.equal(shl(shl(shl(bts2n('10i'),-1),-1),-1), bts2n('10iiii'));

  t.equal(shl(shl(shl(bts2n('10i'),-1), 0), 1), bts2n('10ii01'));

  t.end();
});

test('shift right', function(t) {
  t.equal(shr(bts2n('10'), 5, 0), bts2n('1'));
  t.equal(shr(bts2n('100'), 5, 0), bts2n('10'));
  t.equal(shr(bts2n('i0'), 5, 0), bts2n('i'));
  t.equal(shr(bts2n('i00'), 5, 0), bts2n('i0'));

  t.equal(shr(bts2n('101'), 5, 0), bts2n('10'));
  t.equal(shr(bts2n('i0i'), 5, 0), bts2n('i0'));

  t.end();
});

test('shift right in', function(t) {
  t.equal(shr(0, 5, 1), bts2n('10000'));
  t.equal(shr(0, 5,-1), bts2n('i0000'));
  t.equal(shr(0, 5, 0), bts2n('00000'));

  t.equal(shr(bts2n('iiiii'), 5, 1), bts2n('1iiii'));
  t.equal(shr(bts2n('iiiii'), 5,-1), bts2n('iiiii'));
  t.equal(shr(bts2n('iiiii'), 5, 0), bts2n('0iiii'));

  t.equal(shr(bts2n('i0i0i'), 5, 1), bts2n('1i0i0'));
  t.equal(shr(bts2n('11111'), 5,-1), bts2n('i1111'));
  t.equal(shr(bts2n('10101'), 5, 0), bts2n('01010'));

  t.end();
});
