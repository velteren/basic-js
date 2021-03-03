const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const UNABLE = 'Unable to determine the time of year!';
  if (typeof(date) == 'undefined') return UNABLE;
  const error = new Error('Error');
  if (Object.prototype.toString.call(date) !== '[object Date]') throw error;
  let month = date.getMonth();
  let season;
  if (month == 0 || month == 1 || month == 11) season = 'winter';
  if (month == 2 || month == 3 || month == 4) season = 'spring';
  if (month == 5 || month == 6 || month == 7) season = 'summer';
  if (month == 8 || month == 9 || month == 10) season = 'autumn';
  return season;
};
