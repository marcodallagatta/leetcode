/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const dup = new Set([...nums]);
    console.log(JSON.stringify(nums))
    console.log(JSON.stringify([...dup]))
    console.log(JSON.stringify(nums) === JSON.stringify([...dup]))
    return JSON.stringify(nums) === JSON.stringify([...dup]) ? false : true;
};