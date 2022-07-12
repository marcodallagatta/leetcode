/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  let count = 0;
  
  nums.map(number => {
    if ( String(number).length % 2 === 0) count++;
  });
  
  return count;
};