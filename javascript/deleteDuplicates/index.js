/**
Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:

Input: 1->1->2
Output: 1->2
Example 2:

Input: 1->1->2->3->3
Output: 1->2->3
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    const array = [];
    
    while (head) {
        array.push(head.val);
        head = head.next;
    }    
    
    const array2 = Array.from(new Set(array));
    
    const list = new ListNode();
    let head2 = list;
    
    for (let i = 0; i < array2.length; i++) {
        head2.next = new ListNode(array2[i]);
        head2 = head2.next;
    }
    
    return list.next;
};