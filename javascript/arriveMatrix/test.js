const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('[[4,7,1,6], [5,7,3,9], [3,2,1,2], [7,1,6,3]], 25, 4, 4의 경우 두 가지 경로로 도달할 수 있다.', function() {
        asssert.equal(solution([[4,7,1,6], [5,7,3,9], [3,2,1,2], [7,1,6,3]], 25, 4, 4), 2);
    });
    it('[[1,1,1,1], [1,1,1,1], [1,1,1,1]], 6, 4, 3의 경우 열 가지 경로로 도달할 수 있다.', function() {
        asssert.equal(solution([[1,1,1,1], [1,1,1,1], [1,1,1,1]], 6, 4, 3), 10);
    });
});