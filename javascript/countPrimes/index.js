/*
 * Count the number of prime numbers less than a non-negative number, n.
 */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const array = [false, false];
    
    for (let i = 2; i < n; i += 1) {
        array.push(true);
    }
    
    for (let i = 2; i < n; i += 1) {
        if (array[i]) {
            for (let j = 2; i*j < n; j += 1) {
                array[i*j] = false;
            }
        }
    }
    
    return array.filter((item) => item).length;
};
/**
 * Runtime: 196 ms, faster than 53.56% of JavaScript online submissions for Count Primes.
 * Memory Usage: 107.7 MB, less than 21.07% of JavaScript online submissions for Count Primes.
 */