/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let left = prices[0];
  let right = prices[1];
  let maxProfit = right - left;
  // console.log(left, right, maxProfit);

  for (let i = 1; i < prices.length - 1; i++) {
    // we only move left pointer if i is lower than current
    if (prices[i] < left) left = prices[i];
    // we always move right pointer to the next i
    right = prices[i + 1];
    // if the profit is more than the previous ones, we update it
    maxProfit = right - left > maxProfit ? right - left : maxProfit;
    // console.log(left, right, maxProfit);
  }

  return maxProfit > 0 ? maxProfit : 0;
};