function solution(numbers, target) {
    let tempSet = new Set();
    getNum(numbers, target, 0, tempSet);
    return tempSet.size;
}

function getNum(numbers, target, depth, tempSet) {
    const sum = numbers.reduce((a, b) => { return a + b });
    if (sum == target) {
        tempSet.add(numbers);
    }
    if (numbers.length == depth) {
        return;
    } else {
        const temp = numbers.slice(0);
        temp[depth] = -temp[depth];
        getNum(numbers, target, depth + 1, tempSet);
        getNum(temp, target, depth + 1, tempSet);
    }
}
module.exports = solution;