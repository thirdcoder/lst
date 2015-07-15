'use strict';

function lst(input) {
  switch(input % 3) {
    case 0: return 0;
    case 1: return 1;
    case 2: return -1;

    case -1: return -1;
    case -2: return 1;
    default: throw new Error('lst('+input+'): unable to determine least-significant trit: '+input % 3);
  }
}

function shl(input, carryIn) {
  return input * 3 + carryIn;
}

function shr(input, width, carryIn) {
  return Math.round(input / 3) + (carryIn * Math.pow(3, width - 1));
}

module.exports = {
  lst: lst,
  shl: shl,
  shr: shr,
};
