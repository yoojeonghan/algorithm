/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charArray = [];
    let stringArray = [];
    let index = 0;
    for (let i = 0; i < s.length; i++) {
        if (charArray.indexOf(s[i]) < 0) {
            charArray.push(s[i]);
        } else {
            stringArray.push(JSON.parse(JSON.stringify(charArray)));
            index++;
            i = index;
            charArray = [s[i]];
        }
    }
    stringArray.push(charArray);
    stringArray.sort((a, b) => { return b.length - a.length });
    return stringArray.length > 0 ? stringArray[0].join('').length : 0;
};