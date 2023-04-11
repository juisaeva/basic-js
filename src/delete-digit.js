const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let startArr = [...n.toString()].map(Number);
    let finalArr = [];
 
    console.log(startArr);
    for(let i =0; i<startArr.length;i++) {
        let test =  [...n.toString()].map(Number);
        delete test[i];
        finalArr.push(Number(test.join('')));
    }

    return Math.max.apply(null, finalArr);
}

module.exports = {
  deleteDigit
};
