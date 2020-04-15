const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('"JEROEN"의 경우 56번 움직여야 한다.', function() {
        asssert.equal(solution('JEROEN'), 56);
    });
    it('"JAN"의 경우 23번 움직여야 한다.', function() {
        asssert.equal(solution('JAN'), 23);
    });
    it('"JAZ"일 경우 11번 움직여야 한다.', function() {
        asssert.equal(solution('JAZ'), 11);
    });
    it('"AJAJAA"일 경우 21번 움직여야 한다.', function() {
        asssert.equal(solution('AJAJAA'), 21);
    });
    it('"AAA"일 경우 0번 움직여야 한다.', function() {
        asssert.equal(solution('AAA'), 0);
    });
    it('"ABABAAAAAAABA"일 경우 11번 움직여야 한다.', function() {
        asssert.equal(solution('ABABAAAAAAABA'), 11);
    });
});