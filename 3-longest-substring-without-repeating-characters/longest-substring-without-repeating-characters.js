/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let left = 0;
  let right = 0;
  let longest = 0;

  while (right < s.length) {
    const letter = s[right];

    if (!set.has(letter)) {
      // if it's a new letter, add it to the set, check length, and move right pointer [-->x]
      set.add(letter);
      longest = Math.max(longest, set.size);
      right++;
    } else {
      // if the letter is alreayd present, delete the left side of the set and move left pointer [x-->]
      set.delete(s[left]);
      left++;
    }
  }

  return longest;
};