/**
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.
*/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
 var canPlaceFlowers = function(flowerbed, n) {
    
    let current = 0;
    
    while (current < flowerbed.length && n > 0)
    {
        const pastIndex = Math.max(0, current - 1);
        const nextIndex = Math.min(flowerbed.length - 1, current + 1);

        if (!flowerbed[pastIndex] && !flowerbed[current] && !flowerbed[nextIndex])
        {
            flowerbed[current] = 1;
            n--;
        }
        
        current++;
    }
    
    return n == 0;
};


/**
 * Runtime: 148 ms, faster than 5.46% of JavaScript online submissions for Can Place Flowers.
 * Memory Usage: 41.1 MB, less than 45.01% of JavaScript online submissions for Can Place Flowers.
 */