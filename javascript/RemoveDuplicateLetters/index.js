
// 푸는 중 ...


/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicateLetters = function(s) {
    const visited = new Map();
    const counter = new Map();
    const charArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    for (let i = 0; i < s.length; i++)
    {
        let currentNum = counter[s[i]] ?? 0;
        counter.set(s[i], currentNum);
    }
    
    let result = new Array();
    
    for (let i = 0; i < s.length; i++)
    {
        const currentChar = s[i];
        --counter[currentChar];
        
        if (visited[currentChar])
        {
            continue;
        }
        
        while (result.length > 0 && counter[result[result.length - 1]] > 0 && charArray.indexOf(currentChar) < charArray.indexOf(result[result.length - 1]))
        {
            visited[result[result.length - 1]] = false;
            result.pop();
        }
        
        result.push(currentChar);
        visited[currentChar] = true;
    }
    
    return result.join("");
};