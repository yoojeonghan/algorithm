/**
 * Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
 * Note:
 * Note that in some languages such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
 * In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3 above, the input represents the signed integer. -3.} n 
 */
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    return n.toString(2).split("").filter((char) => char == '1').length;
};
/**
 * Runtime: 112 ms, faster than 6.43% of JavaScript online submissions for Number of 1 Bits.
 * Memory Usage: 40.3 MB, less than 20.53% of JavaScript online submissions for Number of 1 Bits.
 */