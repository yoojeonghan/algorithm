const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('인쇄물이 [2,1,3,2]일 때 2번 문서는 첫번째로 인쇄된다.', function() {
        asssert.equal(solution([2,1,3,2], 2), 1);
    });

    it('인쇄물이 [1,1,9,1,1,1]일 때 0번 문서는 다섯번째로 인쇄된다.', function() {
        asssert.equal(solution([1,1,9,1,1,1], 0), 5);
    });
});