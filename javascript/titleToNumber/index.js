/**
 * Given a column title as appear in an Excel sheet, return its corresponding column number.
 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    const charArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    
    let number = 0;
    let loopNum = 0;
    for (let i = s.length - 1; i >= 0; i -= 1) {
        const mul = Math.pow(26, loopNum);
        if (mul) {
            number += (charArray.indexOf(s[i]) + 1) * mul;
        } else {
            number += (charArray.indexOf(s[i]) + 1);
        }
        loopNum += 1;
    }
    
    return number;
};
/**
 * Runtime: 200 ms, faster than 5.47% of JavaScript online submissions for Excel Sheet Column Number.
 * Memory Usage: 39.9 MB, less than 72.08% of JavaScript online submissions for Excel Sheet Column Number.
 */