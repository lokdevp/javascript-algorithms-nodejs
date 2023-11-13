const pascalTriangle = require('../../math/pascal-triangle/pascalTriangle');

/**
 * @param {number} width
 * @param {number} height
 * @return {number}
 */
function uniquePaths(width, height) {
  const pascalLine = width + height - 2;
  const pascalLinePosition = Math.min(width, height) - 1;

  return pascalTriangle(pascalLine)[pascalLinePosition];
}
module.exports = uniquePaths;
