/**
 * 45.JumpGame2
 * Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
 * Each element in the array represents your maximum jump length at that position.
 * Your goal is to reach the last index in the minimum number of jumps.
 * You can assume that you can always reach the last index.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
    if (nums.length <= 1) return 0;
    
    let result = 0;
    let current = -1;
    let next = 0;
    
    for (let i = 0; i < nums.length; i++)
    {
        if (i > current) // 탐색중인 인덱스가 current보다 클 경우 해당 위치에 도달하기 위해 점프가 필요함
        {
            current = next;
            result++;
        }
        
        next = Math.max(next, i + nums[i]); // 직전 인덱스에서 점프하는게 이득일지, 현재 인덱스에서 점프하는게 이득일지 판단
        
        if (next >= nums.length - 1) // 도달했을 경우 종료
            break;
    }
    
    return result;
};

