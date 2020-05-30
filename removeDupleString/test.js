const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('baabaa의 경우 짝지어 제거할 수 있다.', function() {
        asssert.equal(solution('baabaa'), 1);
    });
    it('cdcd의 경우 짝지어 제거할 수 없다.', function() {
        asssert.equal(solution('cdcd'), 0);
    });
});