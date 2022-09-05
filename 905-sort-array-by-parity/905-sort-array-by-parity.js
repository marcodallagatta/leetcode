/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
  let odds = 0;
  for (let i = 0; i < nums.length - odds; i++) {
    if (nums[i] % 2 !== 0) {
      nums.push(nums[i]);
      nums.splice(i, 1);
      odds++;
      i--;
    }
  }
  return nums;
};