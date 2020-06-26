const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('"[3,0,6,1,5]"의 h-index는 3이다.', function() {
        asssert.equal(solution([3,0,6,1,5]), 3);
    });
    it('"[1,7,0,1,6,4]"의 h-index는 3이다.', function() {
        asssert.equal(solution([1,7,0,1,6,4]), 3);
    });
    it('"[1,1,1,1]"의 h-index는 1이다.', function() {
        asssert.equal(solution([1,1,1,1]), 1);
    });
    it('"[0,0,0,0]"의 h-index는 0이다.', function() {
        asssert.equal(solution([0,0,0,0]), 0);
    });
});