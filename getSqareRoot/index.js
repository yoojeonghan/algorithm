function solution(n) {
    let answer = 0;
    let number1 = Math.sqrt(n);
    if (Number.isInteger(number1)) {
        answer = Math.pow(number1 + 1, 2);
    } else {
        answer = -1;
    }
    return answer;
}

module.exports = solution;