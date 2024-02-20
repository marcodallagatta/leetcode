/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const dup = new Set([...nums]);
    return nums.length === dup.size ? false : true;
};