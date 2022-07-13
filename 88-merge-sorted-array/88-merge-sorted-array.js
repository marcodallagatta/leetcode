/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  nums1.splice(m);
  nums2.splice(n);

  let checkStart = 0;
  
  while (nums2.length) {
   
    for (let i = checkStart; i <= nums1.length; i++) {
      // console.log('i is: ' + i + ' nums1.length is: ' + nums1.length);
      // console.log(nums1);
      // console.log(nums2);
      
      if (i === nums1.length) {
        nums1.splice(nums1.length, 0, nums2[0]);
        break;
      }
      if (nums1[i] > nums2[0]) {
        nums1.splice(i, 0, nums2[0]);
        break;
      }
    }
    checkStart++;
    nums2.shift();
    // console.log(' - - - ')
    // console.log(nums1);
    // console.log(nums2);
  }
  
};