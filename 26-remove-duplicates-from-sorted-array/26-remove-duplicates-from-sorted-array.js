/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let currentCheck = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== currentCheck) {
      currentCheck = nums[i];
    } else {
      nums.splice(i, 1).push('_');
      i--;
    }
  }
};