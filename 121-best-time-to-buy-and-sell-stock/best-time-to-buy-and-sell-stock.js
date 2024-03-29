/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let left = prices[0];
  let right = prices[1];
  let maxProfit = right - left;
  console.log(left, right, maxProfit);

  for (let i = 1; i < prices.length - 1; i++) {
    if (prices[i] < left) left = prices[i];
    right = prices[i + 1];
    maxProfit = right - left > maxProfit ? right - left : maxProfit;
    console.log(left, right, maxProfit);
  }

  return maxProfit > 0 ? maxProfit : 0;
};