/**
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i += 1) {
        if (!map.get(nums[i])) map.set(nums[i], 1);
        map.set(nums[i], map.get(nums[i]) + 1);
    }
    
    return Array.from(map).sort((a, b) => b[1] - a[1])[0][0];
};
/**
 * Runtime: 88 ms, faster than 52.72% of JavaScript online submissions for Majority Element.
 * Memory Usage: 41.3 MB, less than 44.18% of JavaScript online submissions for Majority Element.
 */