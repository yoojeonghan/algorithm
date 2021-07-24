/**
 * 11. Container With Most Water
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 
 * n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). 
 * Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
 * 
 * - 풀이
 * 이중 반복문을 사용하여 모든 경우의 수 중 가장 큰 값을 리턴하는 식으로 풀이했었는데 타임아웃으로 실패했다.
 * 가장 큰 너비의 사각형에서 출발하여 두 지점의 높이를 비교한 뒤 보다 더 작은 쪽의 포인터를 옮기는 방식으로 풀이했다.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let result = 0;
    
    let left = 0;
    let right = height.length - 1;
    
    while (left < right)
    {
        let weight = right - left;
        let current = Math.min(height[left], height[right]) * weight;
        result = Math.max(result, current);
        
        height[left] < height[right] ? left++ : right--;
    }
    
    
    return result;
};