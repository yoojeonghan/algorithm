/**
 * Given a positive integer, return its corresponding column title as appear in an Excel sheet.
 * For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
    ...
 */

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    const charArray = ['A','B','C','D','E','F','G','H','I','J','K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    let result = '';
    
    while (n > 0) {
        const index = (n - 1) % 26;
        result = charArray[index] + result;
        n = Math.floor((n - 1)/26);
    }
    
    return result;
};
/**
 * Runtime: 112 ms, faster than 7.12% of JavaScript online submissions for Excel Sheet Column Title.
 * Memory Usage: 38.2 MB, less than 78.31% of JavaScript online submissions for Excel Sheet Column Title.
 */