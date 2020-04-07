const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('2, 10, [7,4,5,6]일 경우 8초가 소요된다.', function() {
        asssert.equal(solution(2, 10, [7,4,5,6]), 8);
    });
    it('100, 100, [10]일 경우 101초가 소요된다.', function() {
        asssert.equal(solution(100, 100, [10]), 101);
    });
    it('100, 100, [10,10,10,10,10,10,10,10,10,10]일 경우 110초가 소요된다.', function() {
        asssert.equal(solution(100, 100, [10,10,10,10,10,10,10,10,10,10]), 110);
    });
});