const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('"[70, 50, 80, 50]"의 경우 최소값은 3이다.', function() {
        asssert.equal(solution([70, 50, 80, 50]), 3);
    });
    it('"[70, 80, 50]"의 경우 최소값은 3이다.', function() {
        asssert.equal(solution([70, 80, 50]), 3);
    });
});