function solution (array, location) {
    let answer = 0;
    const tempArray = [];
    const resultArray = [];
    for (let i = 0; i < array.length; i++) {
        tempArray.push({ index: i, value: array[i] });
    }
    for (let i = 0; i < tempArray.length; i++) {
        const current = tempArray.shift();
        let isPrint = true;
        for (let j = 0; j < tempArray.length; j++) {
            if (tempArray[j].value > current.value) {
                isPrint = false;
                break;
            }
        }
        if (isPrint) {
            resultArray.push(current.index);
        } else {
            tempArray.push(current);
        }
        i = 0;
    }
    resultArray.push(tempArray[0].index);
    for (let i = 0; i < resultArray.length; i++) {
        if (resultArray[i] == location) {
            answer = i + 1;
        }
    }
    return answer;
}

module.exports = solution;