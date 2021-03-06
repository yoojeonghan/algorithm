/**
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
 

Constraints:

Methods pop, top and getMin operations will always be called on non-empty stacks.
 * 
 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.array = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.array[this.array.length] = x;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.array = this.array.slice(0, this.array.length - 1);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.array[this.array.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min.apply(null, this.array);
};

/**
Runtime: 228 ms, faster than 23.71% of JavaScript online submissions for Min Stack.
Memory Usage: 46.9 MB, less than 8.14% of JavaScript online submissions for Min Stack.
 */