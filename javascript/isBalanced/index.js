/**
 * Given a binary tree, determine if it is height-balanced.
 * For this problem, a height-balanced binary tree is defined as:
 * a binary tree in which the left and right subtrees of every node differ in height by no more than 1.} root 
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) return true;
    
    const getHeight = function (head) {
        if (!head) return 0;
        
        const leftHeight = getHeight(head.left);
        const rightHeight = getHeight(head.right);
        
        if (leftHeight === false || rightHeight === false || Math.abs(leftHeight - rightHeight) > 1) {
            return false;
        }
        
        return Math.max(leftHeight, rightHeight) + 1;
    }
    
    return getHeight(root) ? true : false;
};

/**
 * Runtime: 72 ms, faster than 100.00% of JavaScript online submissions for Balanced Binary Tree.
 * Memory Usage: 43.3 MB, less than 32.38% of JavaScript online submissions for Balanced Binary Tree.
 */