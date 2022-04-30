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
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  let new_arr = arr.slice();
  for (let i = 0; i < new_arr.length; i++) {
    if (new_arr[i] === '--discard-next') {

      if ((i + 1) < new_arr.length) {
        new_arr[i+1] = '*';
      }

      new_arr[i] = '*';
    }
    if (new_arr[i] === '--discard-prev') {
      
      if ((i - 1) >= 0) {
        new_arr[i-1] = '*';
      }

      new_arr[i] = '*';
    }
    if (new_arr[i] === '--double-next') {
      if ((i + 1) < new_arr.length) {
        new_arr[i] = new_arr[i + 1];
      }
      else {
        new_arr[i] = '*';
      }
     
    }
    if (new_arr[i] === '--double-prev') {
      if ((i - 1) >= 0) {
        new_arr[i] = new_arr[i-1];
      }
      else {
        new_arr[i] = '*';
      }
    }
  }

  let answer = new_arr.filter(item => (item != '*'));
  return answer;
}

module.exports = {
  transform
};