/**
 * Implement strStr().
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (haystack === needle) {
        return 0;
    }
    
    for (let i = 0; i < haystack.length; i++) {
        for (let j = i; j < haystack.length; j++) {
            if (haystack.substring(i, j + 1) === needle) {
                return i;
            }
        }
    }
    
    if (haystack.length == 0 && needle.length == 0) {
        return 0;
    } else if (needle.length == 0) {
        return 0;
    } else {
        return -1;
    }
};