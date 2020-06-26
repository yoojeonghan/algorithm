const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('[4,3,2,1]의 경우 [4,3,2]를 리턴한다.', function() {
        asssert.equal(solution([4,3,2,1]),[4,3,2]);
    });
    it('[10]의 경우 [-1]을 리턴한다.', function() {
        asssert.equal(solution([10]), [-1]);
    });
});