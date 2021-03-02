const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let item of matrix[i]) {
    	if (item === '^^') count += 1;
    }
  }
  return count;
};
