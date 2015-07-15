'use strict';

function shl(input, carryIn) {
  return input * 3 + carryIn;
}

module.exports = {
  shl: shl,
};
