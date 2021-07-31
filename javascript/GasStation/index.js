/**
 * 134. Gas Station
 * There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].
 * You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.
 * Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique
 * 
 * - 풀이
 * 배열 두 개에 도착했을 시 얻을 수 있는 자원, 그리고 도착할 때 소모되는 자원이 나열되어 있다. 어느 인덱스에서 출발해야 배열의 모든 요소를 순회할 수 있는지 구하는 문제로 이해했다.
 * 모든 경우를 순회하며 가능한지 여부를 판단하고, 가능하다면 인덱스를 리턴하도록 풀이했다.
 * 그리디 문제임을 인식하였음에도 불구하고 완전탐색으로 풀이했는데, 어떻게 해야 그리디로 풀 수 있을지 찾아봐야 한다.
*/

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
 var canCompleteCircuit = function(gas, cost) {
    let result = -1;
    let currentGas = 0;
    let start = 0;
    let failNum = 0;
    
    for (let i = 0; i < gas.length; i++)
    {
        let index = (start + i) % gas.length;    
        let addGas = gas[index] - cost[index];
        currentGas += addGas;
        
        if (currentGas < 0)
        {
            i = -1;
            start++;
            result = -1;
            currentGas = 0;
            failNum++;
            if (failNum == gas.length)
                break;
        }
        else
        {
            result = start;
            if (i == gas.length - 1)
                break;
        }
    }
        
    return result;
};

/**
 * Runtime: 148 ms, faster than 22.44% of JavaScript online submissions for Gas Station.
 * Memory Usage: 39.1 MB, less than 44.23% of JavaScript online submissions for Gas Station.
 */