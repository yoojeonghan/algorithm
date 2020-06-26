function solution (clothes) {
    let answer = 1;
    const map = new Map();
    for (let i = 0; i < clothes.length; i++) {
        const current = map.get(clothes[i][1]);
        if (current === undefined) {
            map.set(clothes[i][1], 1);
        } else {
            map.set(clothes[i][1], current + 1);
        }
    }
    map.forEach((value) => {
        answer *= value + 1;
    });
    return answer - 1;
}
module.exports = solution;