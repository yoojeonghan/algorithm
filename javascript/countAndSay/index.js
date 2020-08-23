/*
The count-and-say sequence is the sequence of integers with the first five terms as following:
1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence. You can do so recursively, in other words from the previous member read off the digits, counting the number of digits in groups of the same digit.
Note: Each term of the sequence of integers will be represented as a string. 
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    
    function recursion(number, depth) {
        if (depth == 1) {
            return number;
        } else {
            let temp = '';
            let currentNum = number[0];
            let currentCount = 1;
            for (let i = 1; i < number.length; i++) {
                if (currentNum !== number[i]) {
                    temp += currentCount;
                    temp += currentNum;
                    currentNum = number[i];
                    currentCount = 1;
                } else {
                    currentCount++;
                }
            }
            temp += currentCount;
            temp += currentNum;
            return recursion(temp, depth-1)
        }
    }
    
    return recursion('1', n);
};