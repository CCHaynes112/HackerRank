#include <bits/stdc++.h>

using namespace std;

int main() {
    double meal_cost;
    cin >> meal_cost;
    int tip_percent;
    cin >> tip_percent;
    int tax_percent;
    cin >> tax_percent;
    
    double tip, tax, total;
    tip = meal_cost * (double)tip_percent / 100;
    tax = meal_cost * (double)tax_percent / 100;
    total = meal_cost + tip + tax;

    cout << "The total meal cost is " << round(total) << " dollars." << endl;
    
    return 0;
}