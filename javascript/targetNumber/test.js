const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('"[1, 1, 1, 1, 1]"의 경우 3을 5개의 방법으로 만들 수 있다.', function() {
        asssert.equal(solution([1, 1, 1, 1, 1], 3), 5);
    });
});