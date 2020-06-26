function solution (array) {
    const answer = [];
    for (let i = 0; i < array.length; i++) {
        if (i == 0) {
            answer.push(0);
        } else {
            let isNumber = false;
            for (let j = i - 1; j >= 0; j--) {
                if (array[j] > array[i]) {
                    answer.push(j + 1);
                    isNumber = true;
                    break;
                }
            }
            if (!isNumber) {
                answer.push(0);
            }
        }
    }
    return answer;
}

module.exports = solution;