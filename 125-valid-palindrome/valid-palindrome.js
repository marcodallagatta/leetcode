/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const strip = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  return strip === [...strip].reverse().join("");
};