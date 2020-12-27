/** 
 * On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).
 * Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, 
 * and you can either start from the step with index 0, or the step with index 1.
**/

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    if (cost.length < 3) return Math.min(cost[0], cost[1]);
    
    const dp = [cost[0], cost[1]];
    for (let i = 2; i < cost.length; i += 1) {
        dp.push(Math.min(dp[i-1] + cost[i], dp[i-2] + cost[i]));
    }
    
    return Math.min(dp[dp.length - 1], dp[dp.length - 2]);
};

/**
 * Runtime: 88 ms, faster than 59.87% of JavaScript online submissions for Min Cost Climbing Stairs.
 * Memory Usage: 40.8 MB, less than 12.14% of JavaScript online submissions for Min Cost Climbing Stairs.
 */