function solution(numbers) {
    let answer = 0;
    numbers = Array.from(numbers);
    const numSet = new Set();
    getNum(numbers, '', numSet);
    numSet.forEach((number) => {
        if (number >= 2) {
            let isPrime = true;
            for (let i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) {
                    isPrime = false;
                }
            }
            if (isPrime) {
                answer++;
            }
        }
    });
    return answer;
}

function getNum(numbers, string, numSet) {
    if (string.length > 0) {
        numSet.add(Number(string));
    }
    if (numbers.length > 0) {
        for (let i = 0; i < numbers.length; i++) {
            let temp = numbers.slice(0);
            temp.splice(i, 1);
            getNum(temp, string + numbers[i], numSet);
        }
    }
}
module.exports = solution;