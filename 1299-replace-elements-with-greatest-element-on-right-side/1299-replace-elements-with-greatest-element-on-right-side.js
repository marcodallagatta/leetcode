var replaceElements = function(arr) {
  let rightMax = 0;
  for (let i = 0; i < arr.length; i++) {
    
    rightMax = 0;
    for (let x = i + 1; x < arr.length; x++) {
      if (arr[x] > rightMax) rightMax = arr[x];
    }
    arr[i] = rightMax;

    if (i === arr.length - 1) arr[i] = -1;
  }
   return arr;
};