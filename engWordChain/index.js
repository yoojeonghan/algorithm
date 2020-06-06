function solution(n, words) {
    let answer = [0,0];
    const wordSet = new Set();
    let lastWord = words[0][words[0].length-1];
    wordSet.add(words[0]);
    for (let i = 1; i < words.length; i++) {
        if (wordSet.has(words[i]) || words[i][0] !== lastWord) {
            answer = [i%n + 1, Math.ceil((i+1)/n)];
            break;
        }
        wordSet.add(words[i]);
        lastWord = words[i][words[i].length - 1];
    }
    return answer;
}

module.exports = solution;