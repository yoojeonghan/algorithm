function solution(arr) {
    const answer = [];
    let minNum = -1;
    for (let i = 0; i < arr.length; i++) {
        if (minNum == -1 || minNum > arr[i]) {
            minNum = arr[i];
        }
    }
    arr = arr.filter((value) => { return value != minNum });
    if (arr.length > 0) {
        answer = arr;
    } else {
        answer.push(-1);
    }
    return answer;
}