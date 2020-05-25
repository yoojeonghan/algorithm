const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('3번째 피보나치 수를 1234567으로 나눈 나머지 값은 2이다.', function() {
        asssert.equal(solution(3), 2);
    });
    it('5번째 피보나치 수를 1234567으로 나눈 나머지 값은 5이다.', function() {
        asssert.equal(solution(3), 5);
    });
});