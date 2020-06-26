function solution(nums) {
    let answer = 0;
    let maxNum = 3000;
    nums.map((number) => { maxNum += number });
    const array = [false, false];
    for (let i = 2; i <= maxNum; i++) {
        array.push(true);
    }
    for (let i = 2; i * i <= maxNum; i++) {
        if (array[i]) {
           for (let j = i * i; j <= maxNum; j += i) {
               array[j] = false;
           } 
        }
    }
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const index = nums[i]+nums[j]+nums[k];
                if (array[index]) {
                    answer++;
                }
            }
        }
    }
    return answer;
}

module.exports = solution;