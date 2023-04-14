const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (((typeof(sampleActivity)) !== 'string')|| sampleActivity <= 0 || sampleActivity > 15) return false;
  let num = (+(sampleActivity));
  if (isFinite(num) !== true) return false;
	const LOG = Math.log(2);
  let k = LOG / 5730;
  let t = (Math.log((15/num)))/k;
  return Math.ceil(t);
}

module.exports = {
  dateSample
};
