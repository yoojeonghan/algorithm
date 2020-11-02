/**
 * Assume you are an awesome parent and want to give your children some cookies. 
 * But, you should give each child at most one cookie.
 * Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; 
 * and each cookie j has a size s[j]. If s[j] >= g[i], 
 * we can assign the cookie j to the child i, and the child i will be content. 
 * Your goal is to maximize the number of your content children and output the maximum number.
 */

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let result = 0;
    g.sort((a, b) => b - a);
    s.sort((a, b) => b - a);

    let index = 0;
    for (let i = 0; i < g.length; i++) {
        if (g[i] <= s[index]) {
            result++;
            index++;
        }
    }

    return result;
};

/**
Runtime: 100 ms, faster than 88.19% of JavaScript online submissions for Assign Cookies.
Memory Usage: 41.3 MB, less than 5.90% of JavaScript online submissions for Assign Cookies.
*/

console.log(findContentChildren([1,2,3], [1,1])); // 1
console.log(findContentChildren([1,2], [1,2,3])); // 2
