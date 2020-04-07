const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('가로 8, 세로 12의 사각형일 경우 80개의 단위사각형이 남는다.', function() {
        asssert.equal(solution(8, 12), 80);
    });
});