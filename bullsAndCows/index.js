function solution(baseball) {
    let answer = 0;
    for (let i = 123; i < 988; i++) {
        const current = Array.from(i.toString());
        if (current[0] == 0 || current[1] == 0 || current[2] == 0) {
            continue;
        }
        if (current[0] == current[1] || current[1] == current[2] || current[0] == current[2]) {
            continue;
        }
        let isAble = true;
        for (let j = 0; j < baseball.length; j++) {
            const test = Array.from(baseball[j][0].toString());
            let strike = 0;
            let ball = 0;
            for (let k = 0; k < 3; k++) {
                if (current[k] == test[k]) {
                    strike++;
                } else {
                    if (current.indexOf(test[k]) >= 0) {
                        ball++;
                    }
                }
            }
            if (strike != baseball[j][1] || ball != baseball[j][2]) {
                isAble = false;
                break;
            }
        }
        if (isAble) {
            answer++;
        }
    }
    return answer;
}

module.exports = solution;