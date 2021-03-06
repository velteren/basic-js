const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = str + '';
  let separator, additionSeparator, repeatTimes, addition, additionRepeatTimes;
  let result = [];
  result[0] = str;
  for (let option in options) {
    if (!(repeatTimes in options)) {repeatTimes = 1} else {repeatTimes = options[repeatTimes]}
    if (!(separator in options)) {separator = '+'} else {separator = options[separator]}
    if (!(addition in options)) {addition = ''} else {addition = options[addition]}
    if (!(additionRepeatTimes in options)) {additionRepeatTimes = 1} else {additionRepeatTimes = options[additionRepeatTimes]}
    if (!(additionSeparator in options)) {additionSeparator = '|'} else {additionSeparator = options[additionSeparator]}
  }
  let counter = repeatTimes;
  let tmparr = [];
  tmparr[0] = addition;
  for (let i = 0; i < additionRepeatTimes; i++) {
    if (i !== additionRepeatTimes - 1) {
      tmparr.push(additionSeparator);
      tmparr.push(addition);
    }
  }
  let addition_union = tmparr.join('');
  while (counter) {
    result.push(addition_union);
    result.push(separator);
    counter -= 1;
  }
  return result.join('');

};
  