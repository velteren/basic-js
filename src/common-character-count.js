const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split('').sort(),
  		arr2 = s2.split('').sort(),
      counter = 0,
      map1 = new Map(),
      map2 = new Map(),
      allChars = Array.from(new Set((s1 + s2).split('').sort()));
  for (let i = 0; i < arr1.length; i++) {
  	let tmp = arr1.filter(x => x === arr1[i]).length;
    map1.set(arr1[i],tmp);
  }
  for (let i = 0; i < arr2.length; i++) {
  	let tmp = arr2.filter(x => x === arr2[i]).length;
    map2.set(arr2[i],tmp);
  }
  for (let i = 0; i < allChars.length; i++) {
  	if (map1.has(allChars[i]) & map2.has(allChars[i])) {
    	counter += Math.min(map1.get(allChars[i]), map2.get(allChars[i]))
    }
  }
  
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
