/**
 * Given a string s and a string t, check if s is subsequence of t.

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

Follow up:
If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to check one by one to see if T has its subsequence. In this scenario, how would you change your code?

Credits:
Special thanks to @pbrother for adding this problem and creating all test cases.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let result = false;

    if (s.length === 0) {
        return true;
    }
    
    function check(checkString) {
        if (s.length === checkString.length) {
            if (s === checkString) {
                result = true;
            }
        } else {
            for (let i = 1; i < checkString.length; i++) {
                const temp = checkString.split('');
                temp.splice(i, 1);
                check(temp.join(''));
            }
        }
    }

    check(t);
    
    return result;
};

// TimeOut
console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence2 = function(s, t) {
    for (let i = 0; i < t.length; i++) {
        if (s[0] === t[i]) {
            s = s.substring(1, s.length);
        }
    }

    return s.length === 0;
};

/**
 * Runtime: 80 ms, faster than 56.69% of JavaScript online submissions for Is Subsequence.
Memory Usage: 38.8 MB, less than 6.82% of JavaScript online submissions for Is Subsequence.
*/

console.log(isSubsequence2("abc", "ahbgdc")); // true
console.log(isSubsequence2("axc", "ahbgdc")); // false