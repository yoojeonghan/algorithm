function solution(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const current = stack.pop();
        if (current !== s[i]) {
            if (current !== undefined) {
                stack.push(current);
            }
            stack.push(s[i]);
        }
    }
    return stack.length > 0 ? 0 : 1;
}

moudle.exports = solution;