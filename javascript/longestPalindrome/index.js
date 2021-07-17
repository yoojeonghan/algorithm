/**
 * 409. Longest Palindrome
 * Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
 * Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
 * 
 * 
 * 
 *  - 풀이
 * 주어진 알파벳들을 가지고 회문(긔엽긔는 거꾸로해도 긔엽긔 같은)을 최대한 얼마나 길게 만들 수 있냐는 문제로 이해했다.
 * 같은 알파벳이 짝수일 경우엔 무조건 회문으로 만들 수 있지만, 홀수일 경우엔 한 번만 가운데에 놓는 형식으로 넣어서 만들 수 있다.
 * 때문에 홀수를 가운데에 넣었냐는 bool값을 넣어 체크하고, 홀수를 이미 가운데에 넣었을 경우엔 홀수에서 1을 빼서 짝수로 만들어서 회문을 만드는 방식으로 풀었다.
 */


/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
     // 길이가 1보다 작을 경우엔 길이만큼 리턴한다.    
    if (s.length <= 1)
        return s.length;

    // 모두 같은 글자일 경우엔 길이만큼 리턴한다.
    const charArray = Array.from(new Set(s));
    if (charArray.length == 1)
        return s.length;
    
    // Map에 알파벳마다 글자수를 세어 넣었다.
    const charNumMap = new Map();
    Array.from(s).map((char) => 
    {
        const charNum = charNumMap.get(char) ?? 0;
        charNumMap.set(char, charNum + 1);
        return char;
    });
    
    // 홀수를 가운데에 넣었는가 체크하는 변수
    let isSingleAdd = false;
    // 회문 길이
    let result = 0;
    
    charArray.forEach(char => 
    {
        const charNum = charNumMap.get(char);
        if (charNum % 2 == 0)
        {
            result += charNum; // 짝수면 그대로 회문에 넣는다.
        }
        else if (!isSingleAdd) // 아직 홀수를 가운데에 안 넣었으면
        {
            result += charNum;
            isSingleAdd = true; // 그대로 회문에 넣는다.
        }
        else
        {
            result += charNum - 1; // 홀수를 가운데에 이미 넣었으면 하나를 뺀 다음에 회문에 넣는다.
        }
    });
    
    return result;
};

/**
 * Runtime: 80 ms, faster than 79.22% of JavaScript online submissions for Longest Palindrome.
 * Memory Usage: 40.4 MB, less than 48.17% of JavaScript online submissions for Longest Palindrome.
 */