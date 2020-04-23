const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('[[yellow_hat, headgear], [blue_sunglasses, eyewear], [green_turban, headgear]]일 경우 5가지로 위장할 수 있다.', function() {
        asssert.equal(solution([[yellow_hat, headgear], [blue_sunglasses, eyewear], [green_turban, headgear]]), 5);
    });
    it('[[crow_mask, face], [blue_sunglasses, face], [smoky_makeup, face]]일 경우 3가지로 변장할 수 있다.', function() {
        asssert.equal(solution(100, 100, [10]), 101);
    });
});