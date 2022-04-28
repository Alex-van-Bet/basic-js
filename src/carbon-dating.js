const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15; /**современная активность A*/
const HALF_LIFE_PERIOD = 5730;/**период полураспада t1/2*/

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity текущая активность
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof(sampleActivity) === 'Number' ){
    let a = sampleActivity;
  let dateSample;
  dateSample = Math.ceil(Math.log(MODERN_ACTIVITY / a ) / ( 0.693 / HALF_LIFE_PERIOD), 1);
  return dateSample;
  }

  else {
    return false;
 
  }
}

module.exports = {
  dateSample
};
