const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('15의 경우 4가지 경우로 조합할 수 있다.', function() {
        asssert.equal(solution(15),4);
    });
});