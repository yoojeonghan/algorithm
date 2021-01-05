/**
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 * Note: For the purpose of this problem, we define empty string as valid palindrome.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const string = s.replace(/[\W_]+/g, '');
        
    for (let i = 0; i < string.length; i += 1) {
        const head = string[i];
        const tail = string[string.length-1-i];
        
        if (head.toLowerCase() !== tail.toLowerCase()) {
            return false;
        }
    }
    
    return true;
};

/**
 * Runtime: 88 ms, faster than 92.49% of JavaScript online submissions for Valid Palindrome.
Memory Usage: 43.2 MB, less than 40.09% of JavaScript online submissions for Valid Palindrome.
 */