function solution(people, limit) {
    let answer = 0;
    people = people.sort((a, b) => { return b - a });
    while (people.length > 0) {
        let current = people.shift();
        for (let i = people.length - 1; i >= 0; i--) {
            if (current + people[i] <= limit) {
                current += people[i];
                people.splice(i, 1);
                i--;
            }
            if (current+40 >= limit) {
                break;
            }
        }
        answer++;
    }
    return answer;
}

module.exports = solution;