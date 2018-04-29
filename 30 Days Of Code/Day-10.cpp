#include <map>
#include <set>
#include <list>
#include <cmath>
#include <ctime>
#include <deque>
#include <queue>
#include <stack>
#include <string>
#include <bitset>
#include <cstdio>
#include <limits>
#include <vector>
#include <climits>
#include <cstring>
#include <cstdlib>
#include <fstream>
#include <numeric>
#include <sstream>
#include <iostream>
#include <algorithm>
#include <unordered_map>

using namespace std;


int main(){
    int n;
    cin >> n;
    
    int biCount = 0;
    int biCountTmp = 0;
    
    int remainder;
    
    while(n > 0)
    {
        remainder = n % 2;
        n = n / 2;
        
        if(remainder == 0)
            biCountTmp = 0;
        if(remainder == 1)
        {
            biCountTmp++;
            if(biCountTmp > biCount)
                biCount = biCountTmp;
        }
    }
    cout << biCount;
    
    return 0;
}