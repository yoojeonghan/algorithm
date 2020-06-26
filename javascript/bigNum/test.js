const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('"1924", 2의 경우 가장 큰 수는 94이다.', function() {
        asssert.equal(solution('1924', 2), '94');
    });
    it('"1231234", 3의 경우 가장 큰 수는 3234이다.', function() {
        asssert.equal(solution('1231234', 3), '3234');
    });
    it('"4177252841", 2의 경우 가장 큰 수는 77252841이다.', function() {
        asssert.equal(solution('4177252841', 2), '77252841');
    });
});