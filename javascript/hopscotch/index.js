function solution(land) {
    let answer = 0;
    for (let i = 1; i < land.length; i++) {
        const lastArray = land[i-1];
        for (let j = 0; j < land[i].length; j++) {
            let tempArray = lastArray.slice(0);
            tempArray.splice(j, 1);
            land[i][j] += Math.max.apply(null, tempArray);
            if (answer < land[i][j]) {
                answer = land[i][j];
            }
        }
    }
    return answer;
}

module.exports = solution;