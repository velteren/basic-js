const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (((typeof(sampleActivity)) !== 'string')|| sampleActivity <= 0 || sampleActivity > 15) return false;
  let num = (+(sampleActivity));
  if (isFinite(num) !== true) return false;
	const LOG = Math.log(2);
  let k = LOG / 5730;
  let t = (Math.log((15/num)))/k;
  return Math.ceil(t);
};
