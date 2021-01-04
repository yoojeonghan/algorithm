/**
Given a binary tree, find its minimum depth.
The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
Note: A leaf is a node with no children.} root 
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
var minDepth = function(root) {
    if (!root) return 0;
    const depthArray = [];
    
    const getDepth = function (head, level) {
        if (!head.left && !head.right) {
            depthArray.push(level);
            return;
        }
        
        if (head.left) {
            getDepth(head.left, level + 1);
        }
        
        if (head.right) {
            getDepth(head.right, level + 1);
        }
    }
    
    getDepth(root, 1);
    
    return Math.min.apply(null, depthArray);
};

/**
 * Runtime: 260 ms, faster than 61.59% of JavaScript online submissions for Minimum Depth of Binary Tree.
 * Memory Usage: 76.4 MB, less than 9.45% of JavaScript online submissions for Minimum Depth of Binary Tree.
 */
