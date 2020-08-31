/*
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a = a.split('');
    b = b.split('');
    
    const alength = a.length;
    const blength = b.length;
    
    if (alength > blength) {
        for (let i = 0; i < alength - blength; i++) {
            b.unshift(0);
        }
    }
    
    if (blength > alength) {
        for (let i = 0; i < blength - alength; i++) {
            a.unshift(0);
        }
    }
    
    let plus = 0;
    for (let i = a.length - 1; i >= 0; i--) {
        a[i] = Number(a[i]) + Number(b[i]) + Number(plus);
        if (a[i] > 1) {
            plus = Math.floor(a[i] / 2);
            a[i] = Math.floor(a[i] % 2);
        } else {
            plus = 0;
        }
    }
    
    if (plus > 0) {
        a.unshift(1);
    }
    
    return a.join('');
};