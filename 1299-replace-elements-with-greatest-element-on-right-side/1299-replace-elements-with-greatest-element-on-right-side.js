var replaceElements = function(arr) {
  const len = arr.length;
  let rightMax = arr[len - 1];
  arr[arr.length - 1] = -1;
  
  for (let i = arr.length - 2; i >= 0; i--) {
    const curr = arr[i];
    arr[i] = rightMax;
    rightMax = Math.max(curr, rightMax)
  }
   return arr;
};