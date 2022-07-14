/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let numsLength = nums.length;
  
  let currentCheck = nums[0];
  for (let i = 1; i < numsLength; i++) {
    if (nums[i] !== currentCheck) {
      currentCheck = nums[i];
    } else {
      nums.splice(i, 1).push('_');
      numsLength--;
      i--;
    }
  }
};