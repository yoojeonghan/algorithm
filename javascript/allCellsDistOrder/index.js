/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function(R, C, r0, c0) {
    const result = [];
    
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            result.push([i, j]);
        }
    }
    
    result.sort((a, b) => {
        return (Math.abs(r0 - a[0]) + Math.abs(c0 - a[1])) - (Math.abs(r0 - b[0]) + Math.abs(c0 - b[1]))
    });
    
    return result;
};