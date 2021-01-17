/**
 * 
 * Reverse a singly linked list.
 * Example:
 * Input: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL} head 
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
var reverseList = function(head) {
    const array = [];
    
    while (head) {
        array.push(head.val);
        head = head.next;
    }
    
    const root = new ListNode();
    const reverse = array.reverse();
    
    let head2 = root;
    for (let i = 0; i < reverse.length; i += 1) {
        const newNode = new ListNode(reverse[i]);
        head2.next = newNode;
        head2 = head2.next;
    }
    
    return root.next;
};
/**
 * Runtime: 84 ms, faster than 66.53% of JavaScript online submissions for Reverse Linked List.
 * Memory Usage: 40.8 MB, less than 18.01% of JavaScript online submissions for Reverse Linked List.
 */
