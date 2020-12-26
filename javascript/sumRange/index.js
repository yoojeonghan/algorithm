/**
 * Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

Implement the NumArray class:

NumArray(int[] nums) Initializes the object with the integer array nums.
int sumRange(int i, int j) Return the sum of the elements of the nums array in the range [i, j] inclusive (i.e., sum(nums[i], nums[i + 1], ... , nums[j]))
 */

 /**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.array = [0];
    for (let i = 0; i < nums.length; i += 1) {
        this.array.push(this.array[i] + nums[i]);
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.array[j+1] - this.array[i];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

 /**
  * Runtime: 116 ms, faster than 88.00% of JavaScript online submissions for Range Sum Query - Immutable.
    Memory Usage: 45.3 MB, less than 75.69% of JavaScript online submissions for Range Sum Query - Immutable.
  */
