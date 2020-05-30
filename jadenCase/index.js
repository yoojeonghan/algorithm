function solution(s) {
    s = Array.from(s);
    let answer = [];
    let isFirst = true;
    for (let i = 0; i < s.length; i++) {
        if (isFirst && s[i] !== ' ') {
            answer.push(s[i].toUpperCase());
            isFirst = false;
        } else {
            if (s[i] === ' ') {
                isFirst = true;
                answer.push(' ');
            } else {
                answer.push(s[i].toLowerCase());
            }
        }
    }
    return answer.join('');
}

module.exports = solution;