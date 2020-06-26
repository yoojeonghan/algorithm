function solution(skill, skill_trees) {
    let answer = 0;
    skill = Array.from(skill);
    for (let i = 0; i < skill_trees.length; i++) {
        const current = Array.from(skill_trees[i])
        const array = [];
        for (let j = 0; j < current.length; j++) {
            for (let z = 0; z < skill.length; z++) {
                if (current[j] === skill[z]) {
                    array.push(current[j]);
                }
            }
        }
        let isAble = true;
        for (let j = 0; j < array.length; j++) {
            if (skill[j] !== array[j]) {
                isAble = false;
            }
        }
        if (isAble) {
            answer++;
        }
    }
    return answer;
}

module.exports = solution;