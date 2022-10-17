const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const arrTransformed = [];

  if (!(arr instanceof Array)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  let lastDiscardedElement = -1; 
  
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === '--double-next' && arr[i + 1]) {
      arrTransformed.push(arr[i + 1]);
    } else if (arr[i] === '--double-prev' && arr[i - 1]) {
      if((i - 1) !== lastDiscardedElement){
      arrTransformed.push(arr[i - 1]);
      }
    } else if (arr[i] === '--discard-next' && arr[i + 1]) {
      // arrTransformed.splice(i + 1);
      lastDiscardedElement = i + 1;
      i++;
      
    } else if (arr[i] === '--discard-prev' && arr[i - 1]) {
      if((i - 1) !== lastDiscardedElement){
        arrTransformed.splice(i - 1);

      }
    } else if(arr[i] !== '--double-next' && arr[i] !== '--double-prev' && arr[i] !== '--discard-next' && arr[i] !== '--discard-prev')  {

    
        arrTransformed.push(arr[i]);
      
    }

  }

  return arrTransformed;
}

module.exports = {
  transform
};