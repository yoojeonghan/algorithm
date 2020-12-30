/**
 * Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).
For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    const result = [];
    
    const getNumber = function(head, level) {
        const array = [];
        
        if (!head) return;
        
        if (head.left) array.push(head.left.val);
        if (head.right) array.push(head.right.val);
        
        if (array.length) {
            if (!result[level]) result[level] = [];
            result[level] = [...result[level], ...array];
        }
        
        getNumber(head.left, level + 1);
        getNumber(head.right, level + 1);
    }
    
    getNumber(root, 0);
    
    result.reverse();
    if (root) {
        result.push([root.val]);
    }
        
    return result;
};

/**
Runtime: 84 ms, faster than 60.17% of JavaScript online submissions for Binary Tree Level Order Traversal II.
Memory Usage: 41.4 MB, less than 6.09% of JavaScript online submissions for Binary Tree Level Order Traversal II.
*/