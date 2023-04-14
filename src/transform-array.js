const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let transformed = [];
	if (!Array.isArray(arr)) throw new Error ("'arr' parameter must be an instance of the Array!");
  if (!(arr.includes('--discard-next') || arr.includes('--discard-prev') || arr.includes('--double-next') || arr.includes('--double-prev'))) return arr;
  for (let i = 0; i < arr.length; i++ ) {
    switch(arr[i]) {
      case '--discard-next':
        i += 1;
        break;
      case '--discard-prev':
        if (i !== 0 && arr[i-2] !== '--discard-next') transformed.pop();
        break;
      case '--double-next':
        if (i < arr.length - 1) transformed.push(arr[i+1]);
        break;
      case '--double-prev':
        if (i > 0 && arr[i-2] !== '--discard-next') transformed.push(arr[i-1]);
        break;
      default:
        transformed.push(arr[i]);
        break;
    }
  }
  return transformed;
}

module.exports = {
  transform
};
