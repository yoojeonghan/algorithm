/** 
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
Note:
The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
*/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let indexNums2 = 0;
    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] === 0 && indexNums2 < n) {
            nums1.splice(i, 1, nums2[indexNums2]);
            indexNums2++;
        }
    }
    nums1.sort((a, b) => a - b);
};

/*
Runtime: 68 ms, faster than 95.94% of JavaScript online submissions for Merge Sorted Array.
Memory Usage: 39 MB, less than 25.57% of JavaScript online submissions for Merge Sorted Array.
 */