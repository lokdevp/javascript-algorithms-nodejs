/**
 * @param {number} number
 * @param {number} bitPosition - zero based.
 * @return {number}
 */
function clearBit(number, bitPosition) {
  const mask = ~(1 << bitPosition);

  return number & mask;
}
module.exports = clearBit;
