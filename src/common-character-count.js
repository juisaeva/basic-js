const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  const result = [];
  let map = new Map();

  //проходимся по первой строке и записываем, сколько раз встречается каждая буква
  for (let i = 0; i < str1.length; i++) {
      const currentEl = str1[i];
      if(map.has(currentEl)) {
          //если уже есть, то к существующему значению + 1
          map.set(currentEl, map.get(currentEl) + 1)
      } else{
          //если нет - просто 1
          map.set(currentEl, 1)
      }
  }

  //проходимся по второй строке и сравниваем с содержимым map
  for (let i = 0; i < str2.length; i++) {
      let currentEl2 = str2[i];
      if(map.get(currentEl2)) {
          //если элемент такой встречается, то уменьшаем map на единицу
          map.set(currentEl2, map.get(currentEl2) - 1)
          //и записываем это действие в массив, чтобы потом посчитать, сколько раз это произошло
          result.push(currentEl2);
      } 
  }

  //возвращаем число
  return result.length;
}

module.exports = {
  getCommonCharacterCount
};
