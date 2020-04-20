const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('"(()())()"의 경우 "(()())()"를 반환한다.', function() {
        asssert.equal(solution("(()())()"), "(()())()");
    });
    it('")("의 경우 "()"를 반환한다.', function() {
        asssert.equal(solution(")("), "()");
    });
    it('"()))((()"의 경우 "()(())()"를 반환한다.', function() {
        asssert.equal(solution("()))((()"), "()(())()");
    });
});