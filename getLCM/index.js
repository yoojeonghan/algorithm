function solution(arr) {
    let answer = Math.max.apply(null, arr);
    while (true) {
        let isMul = true;
        arr.map((number) => { if (answer%number != 0) isMul = false });
        if (isMul) {
            break;
        } else {
            answer++;
        }
    }
    return answer;
}

module.exports = solution;