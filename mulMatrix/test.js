const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('[[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]]을 곱한 행렬은 [[15, 15], [15, 15], [15, 15]]이다.', function() {
        asssert.equal(solution([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]]), [[15, 15], [15, 15], [15, 15]]);
    });
    it('[[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]]을 곱한 행렬은 [[22, 22, 11], [36, 28, 18], [29, 20, 14]]이다.', function() {
        asssert.equal(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]]), [[22, 22, 11], [36, 28, 18], [29, 20, 14]]);
    });
});