/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

export function validLitterNumber(input) {//密码必须包含数字和字母
  var str = input;
  if (str == null || str.length < 8) {
      return false;
  }
  var reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/);
  if (reg.test(str))
      return true;
}