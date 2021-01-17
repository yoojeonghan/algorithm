/**
 * Given an array of integers, find if the array contains any duplicates.
 * Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return new Set(nums).size != nums.length;
};
/**
 * Runtime: 84 ms, faster than 86.30% of JavaScript online submissions for Contains Duplicate.
 * Memory Usage: 45 MB, less than 54.85% of JavaScript online submissions for Contains Duplicate.
 */