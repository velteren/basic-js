const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = matrix[0].reduce((sum, current) => sum + current, 0),
  		zeros = new Set();
  matrix[0].forEach((item,index) => {
  	if (item === 0) {
    	zeros.add(index)
    }
  })
  if (matrix.length == 1) return result;
  for (let i = 1; i < matrix.length; i++) {
  	for (let j = 0; j < matrix[i].length; j++) {
    	if (zeros.size === matrix.length) return result;
      if (!zeros.has(j)) {
      		result += matrix[i][j];
      	}
      if (matrix[i][j] === 0) {
      		zeros.add(j)
      	}
      }
    }
  return result;
}

module.exports = {
  getMatrixElementsSum
};
