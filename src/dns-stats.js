const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length <= 0 ){
    let answer = {};
		return answer;
	}
  let answer = {};
  let len = domains.length;
  let d = domains;
  let dom;
  console.log (d);
  let max_length = 0;
  for (let i = 0; i < d.length; i++) {
   let temp = d[i].split('.').reverse();
    dom = `.` + temp[0];
    if (temp.length > max_length){
      max_length = temp.length;
    }
    let k = `.` + temp.join('.');
    answer[k] = len;
    len = len - 1;
  }
   answer[dom] = max_length - 1;
  return(answer);
}

module.exports = {
  getDNSStats
};
