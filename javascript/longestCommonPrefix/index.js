/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs = strs.sort((a, b) => { return a.length - b.length });
    const min = strs.length > 0 ? strs[0].length : 0;
    
    let result = '';
    
    for (let i = 0; i < min; i++) {
        let temp = '';
        for (let j = 0; j < strs.length; j++) {
            if (j == 0) {
                temp = strs[j].substring(0, i+1);
                continue;
            }
            if (temp === strs[j].substring(0, i+1)) {
                temp = strs[j].substring(0, i+1);
            } else {
                temp = '';
            }
        }
        if (temp.length > 0) {
            result = temp;
        }
    }
    
    return result;
};