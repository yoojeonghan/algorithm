function solution(name) {
    let answer = 0;
    const charArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const moveArray = [];
    name = Array.from(name);
    for (let i = 0; i < name.length; i++) {
        for (let j = 0; j < charArray.length; j++) {
            if (name[i] === charArray[j]) {
                const move = (j > 13 ? (charArray.length - j) : j)
                answer += move
                moveArray.push(move);
                break;
            }
        }
    }
    let sum = answer;
    let current = 0;
    sum -= moveArray[current];
    moveArray[current] = 0;
    while (sum > 0) {
        let right = 0;
        let left = 0;
        let index1 = 0;
        let index2 = 0;
        const harf = Math.floor(moveArray.length/2);
        for (let i = current+1; i < (current+1) + harf; i++) {
            right++;
            index1 = (i >= moveArray.length) ? moveArray.length - i : i;
            if (moveArray[index1] != 0 && i != current) {
                right--;
                break;
            }
        }
        for (let i = current-1; i > (current-1) - harf; i--) {
            left++;
            index2 = (i < 0) ? moveArray.length + i : i;
            if (moveArray[index2] != 0 && i != current) {
                left--;
                break;
            }
        }
        if (right > left) {
            current = (current - 1) < 0 ? (moveArray.length - 1) : (current - 1);
        } else {
            current = ((current + 1) >= moveArray.length) ? 0 : (current + 1);
        }
        sum -= moveArray[current];
        moveArray[current] = 0;
        answer++;
    }
    return answer;
}

module.exports = solution;