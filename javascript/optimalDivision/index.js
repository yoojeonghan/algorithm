/**
 * You are given an integer array nums. The adjacent integers in nums will perform the float division.
 * For example, for nums = [2,3,4], we will evaluate the expression "2/3/4".
 * However, you can add any number of parenthesis at any position to change the priority of operations. You want to add these parentheses such the value of the expression after the evaluation is maximum.
 * Return the corresponding expression that has the maximum value in string format.
 * Note: your expression should not contain redundant parenthesis.} nums 
 */

/**
 * @param {number[]} nums
 * @return {string}
 */
 var optimalDivision = function(nums) {
    let result = nums.join('/');
    if (nums.length <= 2) return result;
    
    result = [...result];
    
    const slashIndex = result.indexOf('/');
    
    result.splice(slashIndex + 1, 0, '(');
    result.push(')');
    
    return result.join('');
};