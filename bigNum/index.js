function solution(number, k) {
    for (let i = 0; i < number.length; i++) {
        if (k == 0) {
            break;
        }
        if (number[i] < number[i+1]) {
            number = number.substring(0, i) + number.substring(i + 1, number.length);
            k--;
            i-=2;
        }
    }
    if (k > 0) {
        number = number.substring(0, number.length - k);
    }
    return number;
}

module.exports = solution;