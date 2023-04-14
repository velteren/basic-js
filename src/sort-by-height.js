const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let set = new Set(),
  		result = [],
      tmp = []
  arr.forEach((item,index) => {
  	if (item === -1) {
    	set.add(index);
    } else {
    	tmp.push(item);
    }
  })
  tmp.sort((a, b) => a - b);
  for (let i = 0, j = 0; i < arr.length; i++) {
  	if (set.has(i)) {
    	result.push(-1);
    } else {
    	result.push(tmp[j]);
      j++;
    }
  }
  return result;
}

module.exports = {
  sortByHeight
};
