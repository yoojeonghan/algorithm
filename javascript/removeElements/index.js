/**
 * Remove all elements from a linked list of integers that have value val.
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let root = new ListNode();
    let pointer = root;
    
    while (head) {
        if (head.val !== val) {
            const node = new ListNode(head.val);
            pointer.next = node;
            pointer = pointer.next;
        }
        head = head.next;
    }
    
    return root.next;
};
/**
 * Runtime: 100 ms, faster than 47.58% of JavaScript online submissions for Remove Linked List Elements.
 * Memory Usage: 43.4 MB, less than 57.07% of JavaScript online submissions for Remove Linked List Elements.
 */