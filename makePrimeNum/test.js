const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('[1,2,3,4]의 경우 1개의 소수를 만들 수 있다.', function() {
        asssert.equal(solution([1,2,3,4]), 1);
    });
    it('[1,2,7,6,4]의 경우 4개의 소수를 만들 수 있다.', function() {
        asssert.equal(solution([1,2,7,6,4]), 4);
    });
});