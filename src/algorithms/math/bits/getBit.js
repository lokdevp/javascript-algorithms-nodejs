/**
 * @param {number} number
 * @param {number} bitPosition - zero based.
 * @return {number}
 */
function getBit(number, bitPosition) {
  return (number >> bitPosition) & 1;
}
module.exports = getBit;
