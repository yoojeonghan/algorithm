/**
Say you have an array prices for which the ith element is the price of a given stock on day i.
Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        const diff = prices[i] - prices[i - 1];
        if (diff > 0) {
            profit += diff;
        }
    }

    return profit;
};

console.log(maxProfit([7,1,5,3,6,4])); // 7
console.log(maxProfit([1,2,3,4,5])); // 4
console.log(maxProfit([7,6,4,3,1])); // 0

/*
Runtime: 80 ms, faster than 66.35% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
Memory Usage: 36.8 MB, less than 97.11% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
 */