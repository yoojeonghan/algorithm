스킬트리
====================

#1. 이해
------------------
선행 스킬이란 어떤 스킬을 배우기 전에 먼저 배워야 하는 스킬을 뜻합니다.
예를 들어 선행 스킬 순서가 스파크 → 라이트닝 볼트 → 썬더일때, 썬더를 배우려면 먼저 라이트닝 볼트를 배워야 하고, 라이트닝 볼트를 배우려면 먼저 스파크를 배워야 합니다.
선행 스킬 순서 skill과 유저들이 만든 스킬트리1를 담은 배열 skill_trees가 매개변수로 주어질 때, 가능한 스킬트리 개수를 return 하는 solution 함수를 작성해주세요. 선행 스킬 순서 skill의 길이는 1 이상 26 이하이며, 스킬은 중복해 주어지지 않습니다.

#2. 계획
---------------
먼저 skill문자열을 Array로 변환한다. 그 다음 skill_trees를 순회하며 skill_trees[i]에서 skill에 있는 스킬만 빼서 새 array로 만든다. 그 후 array를 순회하며, skill과 array의 순서가 일치하는지 확인한다. 

#3. 실행
-----------------

#4. 회고
-----------------