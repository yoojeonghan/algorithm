const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('탑이 [6,9,5,7,4]일 경우 [0,0,2,2,4]번에서 신호를 받는다.', function() {
        asssert.deepEqual(solution([6,9,5,7,4]), [0,0,2,2,4]);
    });

    it('탑이 [3,9,9,3,5,7,2]일 경우 [0,0,0,3,3,3,6]번에서 신호를 받는다.', function() {
        asssert.deepEqual(solution([3,9,9,3,5,7,2]), [0,0,0,3,3,3,6]);
    });

    it('탑이 [1,5,3,6,7,6,5]일 경우 [0,0,2,0,0,5,6]번에서 신호를 받는다.', function() {
        asssert.deepEqual(solution([1,5,3,6,7,6,5]), [0,0,2,0,0,5,6]);
    });
});