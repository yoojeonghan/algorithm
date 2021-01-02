/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    
    const setTree = function (arr, root) {
        if (!arr.length) return null;
        
        const midIndex = Math.floor(arr.length/2);
        root.val = arr[midIndex];
        root.left = setTree(arr.slice(0, midIndex), new TreeNode());
        root.right = setTree(arr.slice(midIndex + 1), new TreeNode());
        
        return root;
    }
    
    
    return setTree(nums, new TreeNode());
};

/**
 * Runtime: 84 ms, faster than 95.63% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
 * Memory Usage: 44 MB, less than 7.07% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
 */
