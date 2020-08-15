/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You may assume no duplicates in the array.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (target <= nums[i]) {
            return i;
        }
        index++;
    }
    
    return index;
};