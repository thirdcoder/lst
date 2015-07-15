'use strict';

function shift_left(input, carryIn) {
  return input * 3 + (carryIn !== undefined ? carryIn : 0);
}

module.exports = {
  shift_left: shift_left,
};
