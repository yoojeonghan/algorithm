function solution(numbers) {
    let isZero = true;
    numbers = numbers.map((item) => { 
        if (item != 0) {
            isZero = false; 
        }
        return item.toString() 
    }).sort((a, b) => { return Number(b + a) - Number(a + b)});
    const answer = isZero ? '0' : numbers.join('');
    return answer;
}

module.exports = solution;