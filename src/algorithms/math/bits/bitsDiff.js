const countSetBits = require('./countSetBits');

/**
 * Counts the number of bits that need to be change in order
 * to convert numberA to numberB.
 *
 * @param {number} numberA
 * @param {number} numberB
 * @return {number}
 */
function bitsDiff(numberA, numberB) {
  return countSetBits(numberA ^ numberB);
}
module.exports = bitsDiff;
