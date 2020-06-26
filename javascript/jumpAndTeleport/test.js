const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('5를 이동할 경우 배터리의 최솟값은 2이다.', function() {
        asssert.equal(solution(5), 2);
    });
    it('6를 이동할 경우 배터리의 최솟값은 2이다.', function() {
        asssert.equal(solution(6), 2);
    });
    it('5000을 이동할 경우 배터리의 최솟값은 5이다.', function() {
        asssert.equal(solution(5000), 5);
    });
});