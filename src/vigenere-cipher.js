const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(bool) {
    this.bool = bool;
    if (this.bool === undefined) this.bool = true;
  }
  encrypt( m, k, mode ){
	m = m.toUpperCase();
  k = k.toUpperCase();
	var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var maxlength = Math.max(m.length, k.length);
	var r = '';
	for(let i = 0; i < maxlength; i++) { 
		var mi = a.indexOf( m[ ( (i>=m.length) ?i%m.length :i ) ] );
		var ki_s = k[ ( (i>=k.length) ?i%k.length :i ) ];
		var ki = (typeof mode !== 'undefined' && mode.indexOf('gronsfeld') !== -1) ? parseInt( ki_s ): a.indexOf( ki_s );
		ki = ( (typeof mode !== 'undefined' && mode.indexOf('decrypt') !== -1) ?(-ki) :ki );
		let c = a[ ( ( ( a.length + ( mi + ki ) ) % a.length ) ) ];	
		c = (mode === 'shifted_atbash') ? a[a.length-1-a.indexOf(c)] : c;	
		r += c;																
	}
	if (this.bool) {return r} else return r.split('').reverse().join(''); 
}
   
  decrypt( m, k, mode ){
  
	  var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	  var maxlength = Math.max(m.length, k.length);
	  var r = '';
	  for(let i=0; i<maxlength; i++){ 
		  var mi = a.indexOf( m[ ( (i>=m.length) ?i%m.length :i ) ] );
		  var ki_s = k[ ( (i>=k.length) ?i%k.length :i ) ];
		  var ki = (typeof mode !== 'undefined' && mode.indexOf('gronsfeld') !== -1) ? parseInt( ki_s ): a.indexOf( ki_s );
		  ki = ( (typeof mode !== 'undefined' && mode.indexOf('decrypt') !== -1) ?(-ki) :ki );
		  let c = a[ ( ( ( a.length + ( mi + ki ) ) % a.length ) ) ];	
		  c = (mode === 'shifted_atbash') ? a[a.length-1-a.indexOf(c)] : c;
		  r += c;	
	}
	if (this.bool) {return r} else return r.split('').reverse().join('');
}
}

module.exports = {
  VigenereCipheringMachine
};
