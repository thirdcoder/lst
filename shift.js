'use strict';

function shl(input, carryIn) {
  return input * 3 + carryIn;
}

function shr(input) {
  return Math.round(input / 3);
}

module.exports = {
  shl: shl,
  shr: shr,
};
