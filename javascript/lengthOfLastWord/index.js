/**
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.

If the last word does not exist, return 0.

Note: A word is defined as a maximal substring consisting of non-space characters only.

Example:

Input: "Hello World"
Output: 5
 */


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const define = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N', 'O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const define2 = define.map((item) => { return item.toLowerCase() });
    const array = s.split(' ').filter((item) => { return item.length > 0 });
    const lastString = array[array.length - 1];
        
    let isString = false;
    
    if (lastString) {
        isString = true;
        for (let i = 0; i < lastString.length; i++) {
            if (define.indexOf(lastString[i]) < 0 && define2.indexOf(lastString[i]) < 0) {
                isString = false;
                break;
            }
        }
    }
    
    return isString ? lastString.length : 0;
};