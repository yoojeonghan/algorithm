const solution = require('./index');
const asssert = require('assert');

describe('solution Test', () => {
    it('3, [tank, kick, know, wheel, land, dream, mother, robot, tank]의 경우 [3,3]을 반환한다.', function() {
        asssert.equal(solution(3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank']), [3,3]);
    });
    it('5, [hello, observe, effect, take, either, recognize, encourage, ensure, establish, hang, gather, refer, reference, estimate, executive]의 경우 [0,0]를 반환한다.', function() {
        asssert.equal(solution(5, ['hello', 'observe', 'effect', 'take', 'either', 'recognize', 'encourage', 'ensure', 'establish', 'hang', 'gather', 'refer', 'reference', 'estimate', 'executive']), [0,0]);
    });
    it('2, [hello, one, even, never, now, world, draw]의 경우 [1,3]를 반환한다.', function() {
        asssert.equal(solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']), [1,3]);
    });
});