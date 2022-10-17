const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  options.separator = options.separator || '+';
  options.additionSeparator = options.additionSeparator || '|';

  let optionsAddition = String(options.addition);

  if(optionsAddition !== 'undefined') {
    options.additionRepeatTimes = options.additionRepeatTimes || 1;
  } else {
    options.additionRepeatTimes =  0;
  }

  if(typeof str === String)  {
    str = str;
  } else {
    str = String(str);
  }

  options.repeatTimes = options.repeatTimes || 1;



  const newStr = [];
  let result = '';


  for (let i = 0; i < options.repeatTimes; i++) {
    newStr.push(str);

    // if(repeatTimes  !== 0) {}
    for (let n = 0; n < options.additionRepeatTimes; n++) {
      newStr.push(String(options.addition));

      if (n < options.additionRepeatTimes - 1) {
        newStr.push(String(options.additionSeparator));
      }
    }

    if (i < options.repeatTimes - 1) {
      newStr.push(options.separator);
    }

    result = newStr.join('');
  }

  return result;
}

module.exports = {
  repeater
};