const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('8명의 사람이 대진할 때, 4와 7은 3번째 라운드에서 게임한다.', function() {
        asssert.deepEqual(solution(8,4,7), 3);
    });
});