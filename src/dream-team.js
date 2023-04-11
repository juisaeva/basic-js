const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let newArr = [];
  let teamName;
  let result;

  if (Array.isArray(members)) {
    members.forEach(element => {
      if (typeof element === 'string') {
        let elementTrimmed = element.trim();

        newArr.push(elementTrimmed[0].toUpperCase());
      }
    });

  } else {
    result = false;
  }


  result = newArr.sort().join('');
  return result;
}

module.exports = {
  createDreamTeam
};