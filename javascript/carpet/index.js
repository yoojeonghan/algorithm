function solution(brown, red) {
    var answer = [];
    let tempArray = [];
    for (let i = 0; i <= (brown+red)/i; i++) {
        if ((brown+red)%i == 0) {
            tempArray.push({ weight:(brown+red)/i, height: i });
        }
    }
    tempArray.forEach((item) => {
        if ((item.weight - 2) * (item.height - 2) == red) {
            answer[0] = item.weight;
            answer[1] = item.height;
        }
    });
    return answer;
}
module.exports = solution;