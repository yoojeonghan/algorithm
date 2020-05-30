const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('[2,6,8,14]의 최소공배수는 168이다.', function() {
        asssert.equal(solution([2,6,8,14]), 168);
    });
    it('[1,2,3]의 최소공배수는 6이다.', function() {
        asssert.equal(solution([1,2,3]), 6);
    });
});