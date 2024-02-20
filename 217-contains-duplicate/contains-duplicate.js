/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const dup = new Set([...nums]);
    console.log(nums.toString())
    console.log([...dup].toString())
    console.log(nums.toString() === [...dup].toString())
    return nums.toString() == [...dup].toString() ? false : true;
};