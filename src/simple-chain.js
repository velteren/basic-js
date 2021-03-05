const CustomError = require("../extensions/custom-error");
let chain = [];
const chainMaker = {
  getLength() {
    return chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      chain.push(`(  )`); return chainMaker;
    }
    value = value + '';
    chain.push(`( ${value} )`);
    return chainMaker;
  },
  removeLink(position) {
    if (position == undefined || isNaN(position) || position <= 0 || position >= chain.length) {
      chain = [];
      throw new Error('Error');
    }
    chain.splice(position-1,1);
    return chainMaker;
  },
  reverseChain() {
    chain.reverse();
    return chainMaker;
  },
  finishChain() {
    let str = chain.join('~~');
    chain = [];
    return str;
  }
};

module.exports = chainMaker;
