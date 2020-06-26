function solution(board) {
    let maxNum = 0;
    if (board[0][0] == 1 || board[0][1] == 1 || board[1][0] == 1) {
        maxNum = 1;
    }
    for (let i = 1; i < board.length; i++) {
        for (let j = 1; j < board[i].length; j++) {
            if (board[i][j] > 0) {
                const num1 = board[i-1][j-1];
                const num2 = board[i-1][j];
                const num3 = board[i][j-1];
                board[i][j] = Math.min(num1, num2, num3) + 1;
                if (maxNum < board[i][j]) {
                    maxNum = board[i][j];
                }
            }
        }
    }
    return maxNum*maxNum;
}

module.exports = solution;