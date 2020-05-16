const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('(121의 제곱근+1)의 제곱은 144이다.', function() {
        asssert.equal(solution(121), 144);
    });
    it('3의 제곱근은 존재하지 않는다.', function() {
        asssert.equal(solution(3), -1);
    });
});