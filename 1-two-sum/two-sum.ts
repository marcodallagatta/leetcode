function twoSum(nums: number[], target: number): number[] | undefined {
  for (let first = 0; first < nums.length; first++) {
    for (let second = first + 1; second < nums.length; second++) {
      if (nums[first] + nums[second] === target) return [first, second];
    }
  }
}