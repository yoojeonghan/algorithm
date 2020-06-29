#include <string>
#include <vector>
#include <iostream>

using namespace std;

bool solution(int x) {
    int temp = x;
    vector<int> array;
    while (temp > 0) {
        array.push_back(temp%10);
        temp /= 10;
    }
    int sum = 0;
    for (int i = 0; i < array.size(); i++) {
        temp += array[i];
    }
    if (x%temp == 0) {
        return true;
    }
    return false;
}