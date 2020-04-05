/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

function maxProfit(prices) {
  // dynamic programming approach - calculate the profit of the previous day
  // use that previous day profit to see if adding the profit of the current day (ith day) increases the max profit
  let prevProfit = 0;
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    let currProfit = Math.max(prices[i] - prices[i -1] + prevProfit, 0);
    profit = Math.max(currProfit, profit);

    // replace the prev profit to use for the next day
    prevProfit = currProfit;
  }

  return profit;
}

function maxProfit(prices) {
  let min = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    // find the min value
    min = Math.min(min, prices[i]);
    // max profit should be whatever the smallest value is (this is when we should buy) minus the price we are at compared to the last max profit we've had.
    profit = Math.max(profit, prices[i] - min);
  }

  return profit;
}

function maxProfit(prices) {
  // keep track of the min value that we've seen
  let minVal = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    // update the minVal
    if (prices[i] < minVal) {
      minVal = prices[i];
    } else if (profit < prices[i] - minVal) {
      // if we sold at the current value we are on (we bought at the min price and sold here)
      // is the profit more than the current profit we have?
      profit = prices[i] - minVal;
    }
  }

  return profit;
}

function maxProfit(prices) {
  // brute force, O(n^2) just find the difference of all the combintation of elments and return that
  // only subtract if the next price is higher than the price bought at
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] > prices[i]) {
        if (profit < prices[j] - prices[i]) {
          profit = prices[j] - prices[i];
        }
      }
    }
  }

  return profit;
}
