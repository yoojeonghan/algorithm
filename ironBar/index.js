
function solution (array) {
    array = Array.from(array);
    let answer = 0;
    let stick = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === '(') {
            if (array[i + 1] === ')') {
                answer += stick;
                array.splice(i+1, 1);
            } else {
                stick++;
            }
        } else {
            stick--;
            answer++;
        }
    }
    return answer;
}
module.exports = solution;