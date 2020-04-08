const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('"CBD", ["BACDE", "CBADF", "AECB", "BDA"]의 경우 가능한 스킬트리는 2개이다.', function() {
        asssert.equal(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]), 2);
    });
});