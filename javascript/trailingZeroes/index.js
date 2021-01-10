/**
 * 
 * {Given an integer n, return the number of trailing zeroes in n!.
 * Follow up: Could you write a solution that works in logarithmic time complexity?}
 */

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let result = 0;
    while (n > 0) {
        const current = Math.floor(n/5);
        result += current;
        n = current;
    }
    
    return result;
};

/**
 * Runtime: 152 ms, faster than 5.62% of JavaScript online submissions for Factorial Trailing Zeroes.
 * Memory Usage: 39.4 MB, less than 45.56% of JavaScript online submissions for Factorial Trailing Zeroes.
 */