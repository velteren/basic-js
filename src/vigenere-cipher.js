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
  chars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  
  constructor(bool) {
    this.encryption = bool;
  }

  encrypt(msg, key) {
    if (msg === undefined || key === undefined) throw new Error('Incorrect arguments!');
    let i = 0;
    const msgChars = msg.toUpperCase().split(''),
          keyChars = key.toUpperCase().split(''),
          encryptedArr = msgChars.map((item) => {
            if (this.chars.includes(item)) {
              if (i === key.length) i = 0;
              let num = item.charCodeAt(0) + keyChars[i].charCodeAt(0) - 130;
              if (num >= this.chars.length) {
                item = String.fromCharCode(num - this.chars.length + 65);
              } else if (num < 0) {
                item = String.fromCharCode(num + this.chars.length + 65);
              } else {
                item = String.fromCharCode(num + 65);
              }
              i++;
            }
            return item;
          });

    return this.encryption === true || this.encryption === undefined
      ? encryptedArr.join('')
      : encryptedArr.reverse().join('');
  }

  decrypt(msg, key) {
    if (msg === undefined || key === undefined) throw new Error('Incorrect arguments!');
    let i = 0;
    const msgChars = msg.toUpperCase().split(''),
          keyChars = key.toUpperCase().split('');
    const decryptedArray = msgChars.map((item) => {
      if (this.chars.includes(item)) {
        if (i === key.length) i = 0;
        let num = item.charCodeAt(0) - keyChars[i].charCodeAt(0);
        if (num < 0) {
          item = String.fromCharCode(num + this.chars.length + 65);
        } else {
          item = String.fromCharCode(num + 65);
        }
        i++;
      }
      return item;
    });

    return this.encryption === true || this.encryption === undefined
      ? decryptedArray.join('')
      : decryptedArray.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
