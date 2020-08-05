/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const brackets = {'(' : ')', '[': ']', '{': '}'};
    s.split('').forEach((item) => {
        if (stack.length == 0) {
            stack.push(item);
        } else {
            const current = stack.pop();
            if (brackets[current] != item) {
                stack.push(current);
                stack.push(item);
            }
        }
    });
    
    return stack.length == 0 ? true : false;
};