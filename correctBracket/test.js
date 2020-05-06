const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('"()()"는 올바르게 닫힌 경우이다.', function() {
        asssert.equal(solution("()()"), true);
    });
    it('"(())()"는 올바르게 닫힌 경우이다.', function() {
        asssert.equal(solution("(())()"), true);
    });
    it('")()("는 올바르지 않은 경우이다.', function() {
        asssert.equal(solution(")()("), false);
    });
    it('"(()("는 올바르게 않은 경우이다.', function() {
        asssert.equal(solution("(()("), false);
    });
});