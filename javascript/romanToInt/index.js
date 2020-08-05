/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    let sum = 0;
    let last = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (last > roman[s[i]]) {
            sum -= roman[s[i]];
        } else {
            sum += roman[s[i]];
        }
        last = roman[s[i]];
    }
    
    return sum;
};