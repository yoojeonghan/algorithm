두 정수 사이의 합
==================
#1. 이해
--------------
매개변수로 정수 두 값이 주어지는데, 이 두 값 사이에 있는 모든 정수의 합계를 구한다.

#2. 계획
-------------
두 개의 매개변수 중 작은 값부터 순회하며 큰 수에 도달할 때 까지 값을 누적시킨다.

#3. 실행
------------
<pre><code>
function solution(a, b) {
    var answer = 0;
    let temp = 0;
    if (a > b) {
        temp = a;
        a = b;
        b = temp;        
    }
    for (let i = a; i <= b; i++) {
        answer += i;
    }
    return answer;
}

solution(50, 70);
</code></pre>

#4. 회고
-----------
a와 b를 바꾸는 방법 중 좀더 좋은 게 있을 것 같다 ...
