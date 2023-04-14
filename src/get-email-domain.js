const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let arr = email.split('').reverse();
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
  	if (arr[i] !== '@') {
    newArr.push(arr[i]);
    } else break;
  }
  return newArr.reverse().join('');
}

module.exports = {
  getEmailDomain
};
