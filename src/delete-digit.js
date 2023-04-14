const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n).split(''),
  		numbers = []
  for (let i = 0; i < arr.length; i++) {
  	let tmp = '';
  	for (let j = 0; j < arr.length; j++) {
    	if (i !== j) {
      	tmp += arr[j];
      }
    }
    numbers.push(Number(tmp));
  }
  return Math.max(...numbers);
}

module.exports = {
  deleteDigit
};
