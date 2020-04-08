const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('124 나라에선 1을 1로 표현한다.', function() {
        asssert.equal(solution(1), 1);
    });
    it('124 나라에선 2를 2로 표현한다.', function() {
        asssert.equal(solution(2), 2);
    });
    it('124 나라에선 3을 4로 표현한다.', function() {
        asssert.equal(solution(3), 4);
    });
    it('124 나라에선 4를 11로 표현한다.', function() {
        asssert.equal(solution(4), 11);
    });
    it('124 나라에선 9를 24로 표현한다.', function() {
        asssert.equal(solution(9), 24);
    });
    it('124 나라에선 10을 41로 표현한다.', function() {
        asssert.equal(solution(10), 41);
    });
});