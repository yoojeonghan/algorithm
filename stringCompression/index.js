function solution(s) {
    const compressArray = [];
    for (let i = 0; i < s.length; i++) {
        const num = i + 1;
        let count = 1;
        let result = '';
        for (let j = 0; j < s.length; j += num) {
            const current = s.substring(j, j+num);
            const next = s.substring(j+num, j+(num*2));
            if (current === next) {
                count++;
            } else {
                if (count > 1) {
                    result += count;
                }
                result += current;
                count = 1;
            }
        }
        compressArray.push(result);
    }
    compressArray.sort((a, b) => { return a.length - b.length });
    return compressArray[0].length;
}

module.exports = solution;