function solution(n) {
    let answer = 0;
    let number = 0;
    Array.from(n.toString(2)).map((item) => {if (item === '1') number++ });
    while (true) {
        n++;
        let number2 = 0;
        Array.from(n.toString(2)).map((item) => {if (item === '1') number2++ });
        if (number == number2) {
            answer = n;
            break;
        }
    }
    return answer;
}

module.exports = solution;