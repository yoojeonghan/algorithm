/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    x = x.toString();
    const isMinor = x[0] === '-' ? true : false;
    const string = x.split("").reverse();
    let reverseString = isMinor ? '-' + string.splice(0, string.length-1).join("") : string.splice(0, string.length).join("");
    
    return Math.abs(Number(reverseString)) > 2147483648 ? 0 : Number(reverseString);
};