/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let longest = 0;
  let current = 0;
  
  nums.forEach(num => {
    if (num === 1) {
      current++;
    } else {
      current = 0;
    }
    if (current > longest) longest = current;
    console.log(`current: ${current}, longest: ${longest}`)
    
  })
  return longest;
};