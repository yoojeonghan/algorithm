/**
Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Note:

Each element in the result must be unique.
The result can be in any order.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const result = [];
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.indexOf(nums1[i]) >= 0) {
            result.push(nums1[i]);
        }
    }
    
    return Array.from(new Set(result));
};

/**
Runtime: 76 ms, faster than 82.57% of JavaScript online submissions for Intersection of Two Arrays.
Memory Usage: 38.7 MB, less than 11.38% of JavaScript online submissions for Intersection of Two Arrays.
 */