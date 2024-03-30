/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let [left, right, longest] = [0, 0, 0];

  while (right < s.length) {
    const isntRepeating = right - left + 1 === new Set(s.slice(left, right + 1)).size;
    if (isntRepeating) {
      longest = right + 1 - left > longest ? right + 1 - left : longest;
    } else {
      left++;
    }
    right++;
  }

  return longest;
};