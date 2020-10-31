/*
Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

You may return any answer array that satisfies this condition.
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    const array = [];
    const array2 = [];
    
    for (let i = 0 ; i < A.length; i++) {
        if (A[i]%2 === 0) {
            array.push(A[i]);
        } else {
            array2.push(A[i]);
        }
    }
    
    let index = 0;
    for (let i = 1; i <= array.length; i += 2) {
        array.splice(i, 0, array2[index]);
        index++;
    }
    
    return array;
};