/**
 * 55. JumpGame
 * You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
 * Return true if you can reach the last index, or false otherwise.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
    if (nums.length == 0) return false;
    if (nums.length == 1) return true;
    let max = nums[0];
    
    for (let i = 0; i < nums.length - 1; i++)
    {
        if (max >= i)
        {
            max = Math.max(max, nums[i] + i)
        }
        
        if (max >= nums.length - 1)
            return true;
    }
    
    return false;
};
