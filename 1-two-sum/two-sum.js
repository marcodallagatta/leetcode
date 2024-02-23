/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const hash = new Map();

    for (let i=0; i<nums.length; i++) {
        const diff = target - nums[i]
        console.log(i, diff, hash.get(diff))
        if (hash.get(diff) !== undefined) {
            return [i, hash.get(diff)]
        } else {
            hash.set(nums[i], i)
        }
        console.log(hash)
    }
};