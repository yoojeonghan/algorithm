const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('"[[1,2,3,5],[5,6,7,8],[4,3,2,1]]"의 최댓값은 16이다.', function() {
        asssert.equal(solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]]), 16);
    });
});