const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('[[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]]의 경우 2개의 수가 가능하다.', function() {
        asssert.equal(solution([[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]]), 2);
    });
});