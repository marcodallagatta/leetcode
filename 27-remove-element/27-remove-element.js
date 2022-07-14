/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1).push('_');
      numsLength--;
      i--;
    }
  }
};