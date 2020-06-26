const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('"17"의 경우 3개의 소수를 만들 수 있다.', function() {
        asssert.deepEqual(solution('17'), 3);
    });
    it('"011"의 경우 2개의 소수를 만들 수 있다.', function() {
        asssert.deepEqual(solution('011'), 2);
    });
});