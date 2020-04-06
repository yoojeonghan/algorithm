const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('3과 5 사이 정수의 합은 12이다.', function() {
        asssert.equal(solution(3, 5), 12);      
    });

    it('5과 10 사이 정수의 합은 45이다.', function() {
        asssert.equal(solution(5, 10), 45);
    });
});