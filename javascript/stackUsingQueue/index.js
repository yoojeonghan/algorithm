/**
Implement a last in first out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal queue (push, top, pop, and empty).

Implement the MyStack class:

void push(int x) Pushes element x to the top of the stack.
int pop() Removes the element on the top of the stack and returns it.
int top() Returns the element on the top of the stack.
boolean empty() Returns true if the stack is empty, false otherwise.
Notes:

You must use only standard operations of a queue, which means only push to back, peek/pop from front, size, and is empty operations are valid.
Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue), as long as you use only a queue's standard operations.
Follow-up: Can you implement the stack such that each operation is amortized O(1) time complexity? In other words, performing n operations will take overall O(n) time even if one of those operations may take longer.
*/

/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.main = [];
    this.sub = [];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    const length = this.main.length;
    for (let i = 0; i < length; i++) {
        this.sub.unshift(this.main.pop());
    }
    
    for (let i = 0; i < length; i++) {
        this.main.unshift(this.sub.pop());
    }
    this.main.unshift(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    const length = this.main.length;
    for (let i = 0; i < length - 1; i++) {
        this.sub.unshift(this.main.pop());
    }
    const result = this.main.pop();
    for (let i = 0; i < length - 1; i++) {
        this.main.unshift(this.sub.pop());
    }

    return result;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.main[0];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.main.length === 0;
};

/**
Runtime: 80 ms, faster than 27.44% of JavaScript online submissions for Implement Stack using Queues.
Memory Usage: 38.6 MB, less than 5.06% of JavaScript online submissions for Implement Stack using Queues.
 */