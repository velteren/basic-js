const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr,depth=1, deeper=1) {
    if (!Array.isArray(arr)) return 0;
    if (deeper> depth) depth = deeper;
    for (let i = 0; i < arr.length; i++) {
    	if (Array.isArray(arr[i])) {
      	let tmp = this.calculateDepth(arr[i], depth, (deeper + 1));
        depth = tmp;
      }
    }
    return depth;
  }
}

module.exports = {
  DepthCalculator
};
