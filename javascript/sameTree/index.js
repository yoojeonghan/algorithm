/**
Given two binary trees, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const array = [];
    const array2 = [];
    
    findTree(p, 1);
    findTree(q, 2);
    
    function findTree(head, arrNum) {
            if (arrNum === 1) {
                head ? array.push(head.val) : array.push(null);
            } else {
                head ? array2.push(head.val) : array2.push(null);
            }
            if (head) {
                findTree(head.left, arrNum);
                findTree(head.right, arrNum);
            }
    }
    
    if (array.length !== array2.length) return false;
        
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array2[i]) return false;
    }
    
    return true;
};

isSameTree([1,2,3], [1,2,3]);
isSameTree([1,2], [1, null, 2]);
isSameTree([1,2,1], [1,1,2]);

/**
Runtime: 76 ms, faster than 67.01% of JavaScript online submissions for Same Tree.
Memory Usage: 38.8 MB, less than 30.57% of JavaScript online submissions for Same Tree.
 */