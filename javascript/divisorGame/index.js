/**
Alice and Bob take turns playing a game, with Alice starting first.
Initially, there is a number N on the chalkboard.  On each player's turn, that player makes a move consisting of:
Choosing any x with 0 < x < N and N % x == 0.
Replacing the number N on the chalkboard with N - x.
Also, if a player cannot make a move, they lose the game.
Return True if and only if Alice wins the game, assuming both players play optimally.
*/

/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
    let aliceWin = false;
    while (N) {
        let isDivide = false;
        for (let i = 1; i < N; i += 1) {
            if (N%i === 0) {
                N -= i;
                aliceWin = !aliceWin;
                isDivide = true;
                break;
            }
        }
        if (!isDivide) {
            break;
        }
    }
    return aliceWin;
};

/**
 * Runtime: 72 ms, faster than 89.20% of JavaScript online submissions for Divisor Game.
 * Memory Usage: 38.6 MB, less than 14.20% of JavaScript online submissions for Divisor Game.
 */