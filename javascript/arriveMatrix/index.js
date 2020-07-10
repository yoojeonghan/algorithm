function solution(matrix, cost, m, n) {
    let answer = 0;
    const moveArray = [[1, 0], [0, 1]];
    const checkedArray = [];
    for (let i = 0; i < n; i++) {
        const array = [];
        for (let j = 0; j < m; j++) {
            array.push(false);
        }
        checkedArray.push(array);
    }
    checkedArray[0][0] = true;

    dfs([0, 0], cost - matrix[0][0], [[0, 0], matrix[0][0]], checkedArray);

    function dfs(start, remainCost, points, checked) {
        if (start[0] == n - 1 && start[1] == m - 1 && remainCost == 0) {
            answer++;
        }
        for (let i = 0; i < 2; i++) {
            const nextPoint = [start[0] + moveArray[i][0], start[1] + moveArray[i][1]];
            if (nextPoint[0] >= 0 && nextPoint[1] >= 0 && nextPoint[0] < n && nextPoint[1] < m) {
                if (!checked[nextPoint[0]][nextPoint[1]]) {
                    const currentCost = remainCost - matrix[nextPoint[0]][nextPoint[1]];
                    if (currentCost >= 0) {
                        const temp = JSON.parse(JSON.stringify(checked));
                        temp[nextPoint[0]][nextPoint[1]] = true;
                        const temp2 = JSON.parse(JSON.stringify(points));
                        temp2.push([nextPoint[0], nextPoint[1]], matrix[nextPoint[0]][nextPoint[1]]);
                        dfs([nextPoint[0], nextPoint[1]], currentCost, temp2, temp);
                    }
                }
            }
        }
    }
    return answer;
}

module.exports = solution;