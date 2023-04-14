const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = str + '';
  let result = [];
  result[0] = str;
  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.separator === undefined) options.separator = '+';
  if (options.addition === undefined) options.addition = '';
  if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
  if (options.additionSeparator === undefined) options.additionSeparator = '|';
  let counter = options.repeatTimes - 1;
  let tmparr = [];
  tmparr[0] = String(options.addition);
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    if (i !== options.additionRepeatTimes - 1) {
      tmparr.push(options.additionSeparator);
      tmparr.push(String(options.addition));
    }
  }
  let addition_union = tmparr.join('');
  while (counter) {
    result.push(addition_union);
    result.push(options.separator);
    result.push(str);
    counter -= 1;
  }
  result.push(addition_union);
  return result.join('');
}

module.exports = {
  repeater
};
