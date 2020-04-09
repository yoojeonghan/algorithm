function solution(progresses, speeds) {
    const answer = [];
    while (progresses.length > 0) {
        let num = 0;
        for (let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i];
        }
        for (let i = 0; i < progresses.length; i++) {
            if (progresses[i] >= 100) {
                progresses.shift();
                speeds.shift();
                num++;
                i = -1;
            } else {
                break;
            }
        }
        if (num > 0) {
            answer.push(num);
        }
    }
    return answer;
}
module.exports = solution;