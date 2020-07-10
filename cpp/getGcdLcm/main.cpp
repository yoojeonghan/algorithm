#include <string>
#include <vector>

using namespace std;

vector<int> solution(int n, int m) {
    vector<int> answer;
    int number1 = n;
    if (n < m) {
        number1 = m;
    }
    int maxNum = 0;
    for (int i = 1; i < number1; i++) {
        if (n%i == 0 && m%i == 0) {
            maxNum = i;
        }
    }
    answer.push_back(maxNum);
    int minNum = number1;
    while (true) {
        if (minNum % n == 0 && minNum % m == 0) {
            break;
        }
        minNum++;
    }
    answer.push_back(minNum);
    return answer;
}