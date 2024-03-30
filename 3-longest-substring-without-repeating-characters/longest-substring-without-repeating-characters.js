/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 1) return 1;

  let left = 0;
  let right = 0;
  let longest = 0;
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