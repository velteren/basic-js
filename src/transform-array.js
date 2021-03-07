const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let transformed = [];
	if (!Array.isArray(arr)) throw new Error ('Error');
  if (!(arr.includes('--discard-next') || arr.includes('--discard-prev') || arr.includes('--double-next') || arr.includes('--double-prev'))) return arr;
  for (let i=0; i < arr.length; i++) {
    if (arr[i] == '--discard-next' && arr[i+2] == '--double-prev') i += 2;
    if (arr[i] == '--discard-next' && arr[i+2] == '--discard-prev') i += 2;
    if (arr[i] == '--discard-next' && i < arr.length - 1) i += 1;
    if (arr[i] == '--discard-prev' && arr[i-2] !== '--discard-next') transformed.pop();
    if (arr[i] == '--double-next' && i < arr.length - 1) transformed.push(arr[i+1]);
    if (arr[i] == '--double-prev' && i > 0 && arr[i-2] !== '--discard-next') transformed.push(arr[i-1]);
    if (arr[i] !== '--discard-next' && arr[i] !== '--discard-prev' && arr[i] !== '--double-next' && arr[i] !== '--double-prev') transformed.push(arr[i]);
  }
  return transformed;
};
