const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('"3people unFollowed me"는 "3people Unfollowed Me"로 변경된다.', function() {
        asssert.equal(solution('3people unFollowed me'), '3people Unfollowed Me');
    });
    it('"for the last week"는 "For The Last Week"로 변경된다.', function() {
        asssert.equal(solution('for the last week'), 'For The Last Week');
    });
});