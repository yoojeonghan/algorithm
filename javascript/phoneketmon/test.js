const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('[3,1,2,3]의 경우 2를 반환한다.', function() {
        asssert.equal(solution([3,1,2,3]), 2);
    });
    it('[3,3,3,2,2,4]의 경우 3을 반환한다.', function() {
        asssert.equal(solution([3,3,3,2,2,4]), 3);
    });
    it('[3,3,3,2,2,2]의 경우 2를 반환한다.', function() {
        asssert.equal(solution([3,3,3,2,2,2]), 2);
    });
});