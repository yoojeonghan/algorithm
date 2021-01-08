/**
 * Write a program to find the node at which the intersection of two singly linked lists begins.
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    const set = new Set();
    
    while (headA || headB) {
        if (headA) {
            if (!set.has(headA)) {
                if (headA) {
                    set.add(headA);
                    headA = headA.next;
                }
            } else {
                return headA;
            }
        }
        if (headB) {
            if (!set.has(headB)) {
                if (headB) {
                    set.add(headB);
                    headB = headB.next;
                }
            } else {
                return headB;
            }
        }
    }
    
    return null;
};

/**
 * Runtime: 120 ms, faster than 20.00% of JavaScript online submissions for Intersection of Two Linked Lists.
 * Memory Usage: 48 MB, less than 6.21% of JavaScript online submissions for Intersection of Two Linked Lists.
 */
