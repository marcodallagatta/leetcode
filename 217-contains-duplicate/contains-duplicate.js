/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const dup = new Set([...nums]);
    return JSON.stringify(nums) === JSON.stringify([...dup]) ? false : true;
};