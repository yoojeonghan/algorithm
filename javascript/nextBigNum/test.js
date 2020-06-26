const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('78의 경우 다음 큰 숫자는 83이다.', function() {
        asssert.equal(solution(78), 83);
    });
    it('15의 경우 다음 큰 숫자는 23이다.', function() {
        asssert.equal(solution(15), 23);
    });
});