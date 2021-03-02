const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) == false) return false;
  let names = [];
	for (let i=0; i < members.length; i++) {
  	if (typeof(members[i]) == 'string') {
    	names.push(members[i].split(' ').join(''));
    }
  }
  let acronym =[];
  for (let i=0; i < names.length; i++) {

  	acronym.push(names[i].charAt(0));
  }
  
  return acronym.join('').toUpperCase().split('').sort().join('');
};
