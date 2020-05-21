const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('[1,4,2], [5,4,4]의 최솟값은 29이다.', function() {
        asssert.equal(solution([1,4,2], [5,4,4]), 29);
    });
    it('[1,2], [3,4]의 최솟값은 10이다.', function() {
        asssert.equal(solution([1,2], [3,4]), 10);
    });
});