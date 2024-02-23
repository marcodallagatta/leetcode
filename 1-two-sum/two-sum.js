/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        const ind = nums.indexOf(diff);
        console.log(`i is ${i}, diff is ${diff}, ind is ${ind}, ${ind !== -1 && ind !== i}`)
        if (ind !== -1 && ind !== i) {
            console.log([i, ind])
            return [i, ind]
        }
        if (i === nums[i]) continue
    } 
};