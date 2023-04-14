const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
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
      throw new Error("You can't remove incorrect link!");
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

module.exports = {
  chainMaker
};
