/**
 * @param {number} number
 * @param {number} bitPosition - zero based.
 * @return {number}
 */
function setBit(number, bitPosition) {
  return number | (1 << bitPosition);
}
module.exports = setBit;
