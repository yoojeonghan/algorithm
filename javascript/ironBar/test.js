const {solution, solution2} = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('()(((()())(())()))(())일 경우 17개의 막대기로 잘린다.', function() {
        asssert.equal(solution('()(((()())(())()))(())'), 17);
    });
    it('(())(())일 경우 4개의 막대기로 잘린다.', function() {
        asssert.equal(solution('(())(())'), 4);
    });
    it('(())일 경우 2개의 막대기로 잘린다.', function() {
        asssert.equal(solution('(())'), 2);
    });
    it('(((())))일 경우 6개의 막대기로 잘린다.', function() {
        asssert.equal(solution('(((())))'), 6);
    });
    it('((()()))일 경우 6개의 막대기로 잘린다.', function() {
        asssert.equal(solution('((()()))'), 6);
    });
    it('()(((()())(())()))(())일 경우 17개의 막대기로 잘린다.', function() {
        asssert.equal(solution2('()(((()())(())()))(())'), 17);
    });
    it('(())(())일 경우 4개의 막대기로 잘린다.', function() {
        asssert.equal(solution2('(())(())'), 4);
    });
    it('(())일 경우 2개의 막대기로 잘린다.', function() {
        asssert.equal(solution2('(())'), 2);
    });
    it('(((())))일 경우 6개의 막대기로 잘린다.', function() {
        asssert.equal(solution2('(((())))'), 6);
    });
    it('((()()))일 경우 6개의 막대기로 잘린다.', function() {
        asssert.equal(solution2('((()()))'), 6);
    });
});