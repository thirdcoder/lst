'use strict';

var test = require('tape');
var bts2n = require('balanced-ternary').bts2n;
var lst = require('./');

test('least-significant trit', function(t) {
  t.equal(lst(0), 0);
  t.equal(lst(1), 1);
  t.equal(lst(-1), -1);

  t.equal(lst(2), -1);
  t.equal(lst(3), 0);
  t.equal(lst(4), 1);
  t.equal(lst(5), -1);

  t.equal(lst(-2), 1);
  t.equal(lst(-3), 0);
  t.equal(lst(-4), -1);
  t.equal(lst(-5), 1);

  t.equal(lst(bts2n('10')), 0);
  t.equal(lst(bts2n('1i')), -1);
  t.equal(lst(bts2n('11')), 1);

  t.equal(lst(bts2n('i0')), 0);
  t.equal(lst(bts2n('ii')), -1);
  t.equal(lst(bts2n('i1')), 1);

  t.equal(lst(bts2n('101i10i10i1i')), -1);
  t.equal(lst(bts2n('i10i00000i10')), 0);
  t.equal(lst(bts2n('010i0iiii011')), 1);

  t.throws(function() { lst(NaN); });

  t.end();
});

