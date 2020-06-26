function solution (number) {
    const array = [4,1,2];
    const numbers = [];
    while (number > 0) {
        let current = number%3;
        numbers.unshift(array[current]);
        if (current == 0) {
            number = Math.floor((number-1)/3);
        } else {
            number = Math.floor(number/3);
        }
    }
    return Number(numbers.join(''));
}
module.exports = solution;