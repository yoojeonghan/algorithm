/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const array = [...nums1, ...nums2];
    array.sort((a, b) => { return a - b});
    const mid = (array.length/2) - 1;
    if (Number.isInteger(mid)) {
        return (array[mid] + array[mid+1])/2;
    }
    return array[Math.ceil(mid)];
};