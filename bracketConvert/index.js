function solution(p) {
    let answer = getString(p);
    return answer;
}

function getString(string) {
    if (string.length == 0) {
        return '';
    } else {
        let length1 = 0;
        let length2 = 0;
        let u = '';
        for (let i = 0; i < string.length; i++) {
            if (string[i] === '(') {
                length1++;
            } else {
                length2++;
            }
            u += string[i];
            string = string.substring(0, i) + string.substring(i+1, string.length);
            if (length1 == length2) {
                break;
            }
            i--;
        }
        let v = string;
        const stack = [];
        stack.push(u[0]);
        for (let i = 1; i < u.length; i++) {
            const last = stack.pop();
            if (last !== undefined && !(last === '(' && u[i] === ')')) {
                stack.push(last);
                stack.push(u[i]);
            }
        }
        if (stack.length == 0) {
            return u + getString(v);
        } else {
            let tempString = '(';
            tempString += getString(v);
            tempString += ')';
            u = u.substring(1, u.length - 1);
            u = Array.from(u).map((item) => { if (item === '(') { return ')' } else { return '(' }}).join('');
            tempString += u;
            return tempString;
        }
    }
}

module.exports = solution;