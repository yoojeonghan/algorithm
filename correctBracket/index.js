function solution(s){
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ')') {
            if (stack.length == 0) {
                stack.push(')');
                break;
            } else {
                stack.pop();
            }
        } else {
            stack.push('(');
        }
    }
    return stack.length > 0 ? false : true;
}

module.exports = solution;