/**
 * 179. Largest Number
 * Given a list of non-negative integers nums, arrange them such that they form the largest number.
 * Note: The result may be very large, so you need to return a string instead of an integer.
 * 
 * - 풀이
 * 양수로 이루어진 nums 배열이 주어지면, 문자로 치환해서 합한 수가 가장 큰 경우를 구하는 문제로 이해했다.
 * sort 함수를 이용하여, 각 요소들을 문자열로 변환한 뒤 다시 Number로 변환하여 합한 수를 내림차순으로 비교하여 풀이했다.
 */

/**
 * @param {number[]} nums
 * @return {string}
 */
 var largestNumber = function(nums) {
    
    if (nums.length == 1) 
        return nums[0] + "";
    
    let isZero = true;
    
    nums.sort((a, b) => 
    {
        a += "";
        b += "";
        
        if (a != 0 || b != 0)
            isZero = false;
        
        return (Number(b + a)) - (Number(a + b));
    });
    
    
        
    return isZero ? 0 + "" : nums.join("");
};

/**
 * Runtime: 68 ms, faster than 97.94% of JavaScript online submissions for Largest Number.
 * Memory Usage: 40.5 MB, less than 68.82% of JavaScript online submissions for Largest Number.
 */