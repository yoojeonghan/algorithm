/**
 * Reverse bits of a given 32 bits unsigned integer.
 * Note:
Note that in some languages such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.
 */
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let bit = n.toString(2);
    for (let i = 0; i < 32 - n.toString(2).length; i += 1) {
        bit = '0' + bit
    }
    
    return parseInt(bit.split("").reverse().join(''), 2);
};
/**
 * Runtime: 112 ms, faster than 9.36% of JavaScript online submissions for Reverse Bits.
 * Memory Usage: 40.3 MB, less than 60.43% of JavaScript online submissions for Reverse Bits.
 */