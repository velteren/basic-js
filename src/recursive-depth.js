const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr,depth, deeper) {
  	if (!Array.isArray(arr)) return 0;
    if (depth === undefined) depth = 1;
    if (deeper === undefined) deeper = 1;
    if (deeper> depth) depth = deeper;
    for (let i = 0; i < arr.length; i++) {
    	if (Array.isArray(arr[i])) {
      	let tmp = this.calculateDepth(arr[i], depth, (deeper + 1));
        depth = tmp;
      }
    }
    return depth;
  }
};