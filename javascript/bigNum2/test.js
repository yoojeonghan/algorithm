const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('"[6, 10, 2]"의 경우 가장 큰 수는 6210이다.', function() {
        asssert.equal(solution([6, 10, 2], 2), '6210');
    });
    it('"[3, 30, 34, 5, 9]"의 경우 가장 큰 수는 9534330이다.', function() {
        asssert.equal(solution([3, 30, 34, 5, 9]), '9534330');
    });
});