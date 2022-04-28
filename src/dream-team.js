const { NotImplementedError } = require('../extensions/index.js');

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
  if (!Array.isArray(members) ) {
    return false;
  }
    let arr = members;
    
    let answer = [];
    for (let i = 0; i < arr.length; i++){
      if (typeof(arr[i]) != 'string'){
         continue;
      }
      k = arr[i].split('');
      console.log(k);
      for  (let j = 0; j < k.length; j++){
        if (k[j] != ' ') {
          answer.push(k[j].toUpperCase())
          break;
        }
      }
    }
    
    return answer.sort().join('');
}

module.exports = {
  createDreamTeam
};

