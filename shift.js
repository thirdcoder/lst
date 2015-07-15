'use strict';

function shl(input, carryIn) {
  return input * 3 + carryIn;
}

function shr(input, width, carryIn) {
  return Math.round(input / 3) + (carryIn * Math.pow(3, width - 1));
}

module.exports = {
  shl: shl,
  shr: shr,
};
