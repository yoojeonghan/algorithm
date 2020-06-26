function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        let current = i;
        let sum = 0;
        while (sum <= n) {
            sum += current;
            current++;
            if (sum == n) {
                answer++;
            }
        }
    }
    return answer;
}

module.exports = solution;