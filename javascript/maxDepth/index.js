/**
 * Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
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
 * @return {number}
 */
var maxDepth = function(root) {
    const depthArray = [];
    
    const findDepth = function (head, depth) {
        if (!head) {    
            depthArray.push(depth);
            return;
        }
        
        depth++;
        findDepth(head.left, depth);
        findDepth(head.right, depth);
    }
    
    findDepth(root, 0);
    
    return Math.max.apply(null, depthArray);
};

/**
 * Runtime: 84 ms, faster than 83.98% of JavaScript online submissions for Maximum Depth of Binary Tree.
 * Memory Usage: 42.2 MB, less than 11.28% of JavaScript online submissions for Maximum Depth of Binary Tree.
 */