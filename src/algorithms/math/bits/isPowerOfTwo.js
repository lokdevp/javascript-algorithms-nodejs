/**
 * @param {number} number
 * @return bool
 */
function isPowerOfTwo(number) {
  return (number & (number - 1)) === 0;
}
module.exports = isPowerOfTwo;
