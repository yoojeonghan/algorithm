가장 큰 정사각형 찾기
====================

#1. 이해
------------------
1과 0으로 채워진 board 배열이 있을 때, 표에서 1로 이루어진 가장 큰 정사각형을 찾아 리턴하라.

#2. 계획
---------------
배열의 1, 1 위치부터 순회하며 만들 수 있는 최대 변의 길이를 구한다. 현재 위치가 0이 아니라면 좌측값, 상단값, 좌측상단값의 값 중 최소값에 + 1을 더한 값으로 교체한다. 만약 현재 위치가 1,2,1로 둘러싸여진 경우 최대 변의 길이는 2가 되며, 2,2,2로 둘러싸여진 경우 최대 변의 길이는 3이 된다.

#3. 실행
-----------------

#4. 회고
-----------------
다이나믹 프로그래밍을 처음 접해보게 된 계기가 되는 문제였다.