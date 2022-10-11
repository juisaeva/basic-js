const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let result;



  if (date) {
    try {
      let dateMonth = date.getMonth();
      let dateDay = date.getDate();
      let dateYear = date.getYear();

      if(dateDay <= 0) {
        throw new Error('Invalid date!');
      } 

        if ((dateMonth === 2 && dateDay <= 31 )|| (dateMonth === 3 && dateDay <= 30) || (dateMonth === 4 && dateDay <= 31)) {
          result = 'spring';
        } else if ((dateMonth === 5 && dateDay <= 30) || (dateMonth === 6 && dateDay <= 31) ||( dateMonth === 7 && dateDay <= 31)) {
          result = 'summer';
        } else if ((dateMonth === 8 && dateDay <= 30)|| (dateMonth === 9 && dateDay <= 31) ||( dateMonth === 10 && dateDay <= 30)) {
          result = 'autumn (fall)';
        } else if ((dateMonth === 11 && dateDay <= 31) || (dateMonth === 0 && dateDay <= 31) || (dateMonth === 1 && dateDay <= 28)) {
          result = 'winter';
        } else if (dateYear % 4 && dateMonth === 1 && dateDay <= 29 ) {
          result = 'winter';
        }else {
          throw new Error('Invalid date!');
        }

  
  } catch {
    throw new Error('Invalid date!');
  }
  
  }else {
    result = 'Unable to determine the time of year!';
  }

  return result;
}

module.exports = {
  getSeason
};