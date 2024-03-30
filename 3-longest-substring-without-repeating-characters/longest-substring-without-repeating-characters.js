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
    console.log(`${left}:${s[left]} ${right}:${s[right]} = ${s.slice(left, right + 1)}`);
    console.log(
      `span = ${right - left + 1}, set = ${new Set(s.slice(left, right)).size}, same = ${
        right - left + 1 === new Set(s.slice(left, right + 1)).size
      }`
    );
    const isntRepeating = right - left + 1 === new Set(s.slice(left, right + 1)).size;
    console.log(isntRepeating);
    if (isntRepeating) {
      longest = right + 1 - left > longest ? right + 1 - left : longest;
    } else {
      left++;
    }
    right++;
    console.log(left, right, longest);
  }

  return longest;
};