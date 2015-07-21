# lst

Get the "least significant trit" (LST) of a number

Usage:

    var lst = require('lst');

    lst(3);     // 0
    lst(4);     // 1
    lst(5);     // -1

    lst(-3);    // 0
    lst(-4);    // -1
    lst(-5)     // 1

The LST is the rightmost digit when the signed integer is written in balanced ternary notation.
Similar to [least significant bit](https://en.wikipedia.org/wiki/Least_significant_bit) (LSB)
in base 2 except for base 3.

See also: [balanced-ternary](https://github.com/thirdcoder/balanced-ternary)
