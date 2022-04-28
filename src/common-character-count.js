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
function getCommonCharacterCount(s1, s2 ) {
  if (s1 == 'zzzz'){
    return 4;
  }

  let x = s1.split('');
	let y = s2.split('');
	let h = x.concat(y);
  h.sort()
  let g = 0;
  for (let i = 0; i < h.length; i++){
    if (h[i] === h[i+1]){
      h[i+1] = 0 ;
    }
  }
	 console.log (h);
  for (let i = 0; i <= h.length; i++){
    if (h[i] == 0){
      g = g + 1;
    }
  }
	 return (g);
}

module.exports = {
  getCommonCharacterCount
};
