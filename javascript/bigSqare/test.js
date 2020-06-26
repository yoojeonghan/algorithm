const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('[[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]]의 경우 9가 최대 크기이다.', function() {
        asssert.equal(solution([[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]]), 9);
    });
    it('[[0,0,1,1],[1,1,1,1]]의 경우 4가 최대 크기이다.', function() {
        asssert.equal(solution([[0,0,1,1],[1,1,1,1]]), 4);
    });
});