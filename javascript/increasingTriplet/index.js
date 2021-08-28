/**
 * Given an integer array nums, 
 * return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. 
 * If no such indices exists, return false.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var increasingTriplet = function(nums) {
    let first = Number.MAX_VALUE;
    let second = Number.MAX_VALUE;
    
    for (let i = 0 ; i < nums.length; i++)
    {
        if (nums[i] <= n1) // 첫번째 값보다 nums[i]가 작으면
        {
            first = nums[i]; // 첫번째 값을 nums[i]로 설정
        }
        else if (nums[i] <= n2) // 첫번째 값보다는 nums[i]가 크고 두번째 값보다는 nums[i]가 작으면
        {
            second = nums[i]; // 두번째 값을 nums[i]로 설정
        }
        else
        {
            return true; // 첫번째, 두번째 값보다 크면 참
        }
    }
    
    return false;
};

/**
 * Runtime: 101 ms, faster than 13.71% of JavaScript online submissions for Increasing Triplet Subsequence.
 * Memory Usage: 52.4 MB, less than 68.90% of JavaScript online submissions for Increasing Triplet Subsequence.
 */