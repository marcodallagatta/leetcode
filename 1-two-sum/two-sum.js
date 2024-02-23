/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        const ind = nums.indexOf(diff);
        if (ind !== -1 && ind !== i) return [i, ind]
        if (i === nums[i]) continue
    } 
};