/**
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    s = s.split("");
    t = t.split("");
    
    let nums = 0;
    for (let i = 0; i < s.length; i += 1) {
        s = s.map((item) => { 
            if (!Number.isInteger(item) && item == s[i]) {
                nums += 1;
                return i;
            }
            return item;
        });
        
        t = t.map((item) => { 
            if (!Number.isInteger(item) && item == t[i]) {
                return i;
            }
            return item;
        });
        
        if (nums === s.length) {
            break;
        }
    }
    
    return s.join("") === t.join("");
};
/**
 * Runtime: 324 ms, faster than 5.12% of JavaScript online submissions for Isomorphic Strings.
 * Memory Usage: 51.7 MB, less than 5.12% of JavaScript online submissions for Isomorphic Strings.
 */