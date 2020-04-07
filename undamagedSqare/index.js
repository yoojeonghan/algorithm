function solution (m, n) {
    let temp = 0;
    for (let i = 0; i <= Math.max(m,n); i++) {
        if (m%i == 0 && n%i == 0) {
            temp = i;
        }
    }
    return (m*n) - (m+n-temp);
}
module.exports = solution;