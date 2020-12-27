/**
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.
Note: A leaf is a node with no children.
Example:
Given the below binary tree and sum = 22,
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
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (!root) return false;
    
    let result = false;
    const dfs = function(head, sum, answer) {
        if (head.left) {
            dfs(head.left, head.val + sum, answer);
        }
        if (head.right) {
            dfs(head.right, head.val + sum, answer);
        }
        if (!head.left && !head.right) {
            if (head.val + sum === answer) {
                result = true;
            }
        }
    }
    
    dfs(root, 0, sum);
    
    return result;
};

/*
Runtime: 80 ms, faster than 98.43% of JavaScript online submissions for Path Sum.
Memory Usage: 42.4 MB, less than 24.27% of JavaScript online submissions for Path Sum.
*/