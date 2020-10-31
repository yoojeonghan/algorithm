/**
You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2. Find all the next greater numbers for nums1's elements in the corresponding places of nums2.

The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, output -1 for this number.

Example 1:
Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
Output: [-1,3,-1]
Explanation:
    For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
    For number 1 in the first array, the next greater number for it in the second array is 3.
    For number 2 in the first array, there is no next greater number for it in the second array, so output -1.
Example 2:
Input: nums1 = [2,4], nums2 = [1,2,3,4].
Output: [3,-1]
Explanation:
    For number 2 in the first array, the next greater number for it in the second array is 3.
    For number 4 in the first array, there is no next greater number for it in the second array, so output -1.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const result = [];
    for (let i = 0; i < nums1.length; i++) {
        const index = nums2.indexOf(nums1[i]);
        const number = nums2[index];
        let current = -1;
        for (let j = index; j < nums2.length; j++) {
            if (number < nums2[j]) {
                current = nums2[j];
                break;
            }
        }
        result.push(current);
    }
    return result;
};


console.log(nextGreaterElement([4,1,2], [1,3,4,2]));
console.log(nextGreaterElement([2,4], [1,2,3,4]));

/*
Runtime: 80 ms, faster than 80.72% of JavaScript online submissions for Next Greater Element I.
Memory Usage: 39.2 MB, less than 37.11% of JavaScript online submissions for Next Greater Element I.
*/