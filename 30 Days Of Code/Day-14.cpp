Difference(vector<int> arr) {
    elements = arr;
    for(int i = 0; i < elements.size(); i++) {
        elements.at(i) = abs(elements.at(i));
    }
    sort(elements.rbegin(), elements.rend());
    
}

void computeDifference()
{
    maximumDifference = elements.at(0) - elements.back();
}