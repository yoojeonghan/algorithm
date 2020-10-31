/**
Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Note:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const result = [];
    for (let i = 0; i < nums1.length; i++) {
        const index = nums2.indexOf(nums1[i]);
        if (index >= 0) {
            result.push(nums1[i]);
            nums2.splice(index, 1);
        }
    }
    
    return result;
};

/**
Runtime: 76 ms, faster than 89.16% of JavaScript online submissions for Intersection of Two Arrays II.
Memory Usage: 38.1 MB, less than 5.79% of JavaScript online submissions for Intersection of Two Arrays II.
 */