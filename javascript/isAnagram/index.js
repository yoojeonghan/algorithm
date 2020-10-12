/**
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    } 
    s = Array.from(s);
    let result = true;
    for (let i = 0; i < t.length; i++) {
        const index = s.indexOf(t[i]);
        if (index < 0) {
            result = false;
            break;
        } else {
            s.splice(index, 1);
        }
    }

    return result;
};


/*
Runtime: 3296 ms, faster than 5.00% of JavaScript online submissions for Valid Anagram.
Memory Usage: 44.2 MB, less than 10.44% of JavaScript online submissions for Valid Anagram.
*/