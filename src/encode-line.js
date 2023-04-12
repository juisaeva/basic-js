const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  const strToArr = str.split('')
  // console.log(strToArr);
  const newArr = [];
  let counter = 0;

  for(let i = 0; i < strToArr.length; i++) {
      
       if(strToArr[i] === strToArr[i+1]) {
           counter = counter + 1;
       } 
       
       if(strToArr[i] != strToArr[i+1]){
         
         //не записываем единицу в массив
         if(counter>0) {
           newArr.push(counter + 1);
          }
          
          newArr.push(strToArr[i]);
           counter = 0;
       }
   }
   
   return newArr.join('');
}

module.exports = {
  encodeLine
};
