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
var isSymmetric = function(root) {
    if (!root) return true;
    
    const dfs = function (left, right) {
        if (!left && !right) {
            return true;
        }
        if (!left || !right) {
            return false;
        }
        if (left.val !== right.val) {
            return false;
        }
        
        return dfs(left.left, right.right) && dfs(left.right, right.left);
    }
    
    return dfs(root.left, root.right);
};

/**
 * Runtime: 84 ms, faster than 91.70% of JavaScript online submissions for Symmetric Tree.
 * Memory Usage: 40.6 MB, less than 40.01% of JavaScript online submissions for Symmetric Tree.
 */