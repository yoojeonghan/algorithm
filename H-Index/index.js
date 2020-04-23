function solution(citations) {
    let answer = 0;
    const map = new Map();
    for (let i = 0; i < citations.length; i++) {
        for (let j = 0; j <= citations[i]; j++) {
            if (map.get(j) === undefined) {
                map.set(j, 1);
            } else {
                map.set(j, map.get(j) + 1);
            }
        }
    }
    const array = Array.from(map).sort((a, b) => { return b[0] - a[0] });
    for (let i = 0; i < array.length; i++) {
        if (array[i][0] <= array[i][1]) {
            answer = array[i][0];
            break;
        }
    }
    if (answer == 0) {
        answer = array[0][0];
    }
    return answer;
}

module.exports = solution;