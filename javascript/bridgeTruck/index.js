function solution (bridge_length, weight, truck_weights) {
    let answer = 0;
    const bridge_queue = [];
    let bridge_weight = 0;
    for (let i = 0; i < bridge_length; i++) {
        bridge_queue.push(0);
    }
    while (true) {
        answer++;
        bridge_weight -= bridge_queue.shift();
        const currentTruck = truck_weights.shift();
        if (currentTruck === undefined && bridge_weight == 0) {
            break;
        } else {
            if (bridge_weight + currentTruck <= weight) {
                bridge_weight += currentTruck;
                bridge_queue.push(currentTruck);
            } else {
                truck_weights.unshift(currentTruck);
                bridge_queue.push(0);
            }
        }
    }
    return answer;
}
module.exports = solution;