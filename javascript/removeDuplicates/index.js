/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let temp = NaN;
    for (let i = 0; i < nums.length; i++) {
        if (temp == nums[i]) {
            nums.splice(i, 1);
            i -= 1;
        }
        temp = nums[i];
    }
};