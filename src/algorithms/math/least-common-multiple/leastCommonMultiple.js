const euclideanAlgorithm = require('../euclidean-algorithm/euclideanAlgorithm');

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

function leastCommonMultiple(a, b) {
  return ((a === 0) || (b === 0)) ? 0 : Math.abs(a * b) / euclideanAlgorithm(a, b);
}
module.exports = leastCommonMultiple;
