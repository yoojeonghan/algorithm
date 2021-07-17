/**
 * 455. Assign Cookies
 * Assume you are an awesome parent and want to give your children some cookies. 
 * But, you should give each child at most one cookie.
 * Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; 
 * and each cookie j has a size s[j]. If s[j] >= g[i], 
 * we can assign the cookie j to the child i, and the child i will be content. 
 * Your goal is to maximize the number of your content children and output the maximum number.
 * 
 * - 풀이
 * g에는 어린이들의 쿠키 요구량이 들어있고, s에는 쿠키 하나하나의 크기가 들어있다. 큰 쿠키는 요구량이 큰 어린이에게 주는 것이 이득이다.
 * 때문에 어린이들 g와 쿠키들 s를 내림차순으로 정렬한 후, 쿠키의 크키가 어린이의 요구량을 충족하면 쿠키를 지급하였다.
 */

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let result = 0;
    // 어린이들과 쿠키들을 내림차순으로 정렬한다.
    g.sort((a, b) => b - a); 
    s.sort((a, b) => b - a);

    // 쿠키의 번호
    let index = 0;
    for (let i = 0; i < g.length; i++) {
        if (g[i] <= s[index]) { // 쿠키가 어린이의 요구량을 만족시키면
            result++; // 만족한 어린이의 수를 카운팅하고
            index++; // 다음 쿠키로 이동한다.
        }
    }

    return result;
};

/**
Runtime: 92 ms, faster than 97.37% of JavaScript online submissions for Assign Cookies.
Memory Usage: 41.3 MB, less than 59.21% of JavaScript online submissions for Assign Cookies.
*/

console.log(findContentChildren([1,2,3], [1,1])); // 1
console.log(findContentChildren([1,2], [1,2,3])); // 2
