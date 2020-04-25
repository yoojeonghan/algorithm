const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('brown 10, red 2일 경우 [4,3]을 반환한다.', function() {
        asssert.equal(solution(10, 2), [4, 3]);
    });
    it('brown 8, red 1일 경우 [3,3]을 반환한다.', function() {
        asssert.equal(solution(8, 1), [3, 3]);
    });
    it('brown 24, red 24일 경우 [8,6]을 반환한다.', function() {
        asssert.equal(solution(24, 24), [8, 6]);
    });
});