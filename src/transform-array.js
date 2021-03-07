const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let transformed = [];
	if (!Array.isArray(arr)) throw new Error ('Error');
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
};
