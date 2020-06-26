#include <string>
#include <vector>
#include <algorithm>

using namespace std;

bool compare(int a, int b) {
    int num1 = stoi(to_string(a) + to_string(b));
    int num2 = stoi(to_string(b) + to_string(a));
    if (num1 > num2) {
        return true;
    }
    else {
        return false;
    }
}

string solution(vector<int> numbers) {
    string answer = "";
    int sum = 0;
    sort(numbers.begin(), numbers.end(), compare);
    for (int i = 0; i < numbers.size(); i++) {
        answer += to_string(numbers[i]);
        sum += numbers[i];
    }
    if (sum > 0) {
        return answer;
    }
    else {
        return "0";
    }
}