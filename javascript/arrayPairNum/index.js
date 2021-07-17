/**
 * 561. Array Partition I
 * Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.
 * 
 * - 풀이
 * 2n 길이의 정수 배열이 주어졌을 때, min(a, b)로 두 개씩 묶어 더한다고 가정하면 가장 큰 값은 무엇일지 찾는 문제로 이해했다.
 * 큰 수가 작은 수와 묶이면 작은 수로 더해지기 때문에, 작은 수는 작은수끼리, 큰 수는 큰 수끼리 묶는 것이 유리하다고 판단했다.
 * 배열을 오름차순으로 정렬한 뒤, 인덱스를 2씩 증가시키는 반복문을 돌려 결과를 합산하는 방식으로 풀이했다.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b); // 배열 오름차순 정렬
    
    let result = 0;
    
    for (let i = 0; i < nums.length; i += 2)
    {
        result += nums[i]; // 인덱스를 2씩 증가시키며 결과 합산
    }
    
    return result;
};

/**
 * Runtime: 128 ms, faster than 75.48% of JavaScript online submissions for Array Partition I.
 * Memory Usage: 44.4 MB, less than 34.50% of JavaScript online submissions for Array Partition I.
 */