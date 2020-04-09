const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('[93, 30, 55], [1, 30, 5]일 경우 [2, 1]개의 기능이 배포된다.', function() {
        asssert.deepEqual(solution([93, 30, 55], [1, 30, 5]), [2, 1]);
    });
});