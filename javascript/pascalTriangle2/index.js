/*
Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle.

Notice that the row index starts from 0.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Follow up:

Could you optimize your algorithm to use only O(k) extra space?
 */

 /**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const array = [1];
    for (let i = 1; i < rowIndex; i++) {
        array.push(0);
    }
    
    let past = 1;
    let sum = 0;
    
    for (let i = 1; i <= rowIndex; i++) {
        for (let j = 1; j < i; j++) {
            sum = past + array[j];
            past = array[j];
            array[j] = sum;
        }
        array[i] = 1;
    }
    
    return array;
};