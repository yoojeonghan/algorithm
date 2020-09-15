/*
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:
Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = [];
    for (let i = 0; i < numRows; i++) {
        const result2 = [];
        for (let j = numRows; j >= numRows - i; j--) {
            if (j === numRows || j === numRows - i) {
                result2.push(1);
            } else {
                const current = result[i-1][result2.length-1] + result[i-1][result2.length];
                result2.push(current);
            }
        }
        result.push(result2);
    }
        
    return result;
};