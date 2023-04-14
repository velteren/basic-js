const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
  	let counter = 1;
    while(str[i] === str[i + 1]) {
    	counter += 1;
      i += 1;
    }
    if (counter !== 1) arr.push(counter);
    arr.push(str[i]);
  }
  return arr.join('');
}

module.exports = {
  encodeLine
};
