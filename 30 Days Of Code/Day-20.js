function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    // Write Your Code Here

    var numOfSwaps = 0;
    for(var i = 0; i < n; i++) {
        
        for(var j = 0; j < n; j++) {
            if(a[j] > a[j+1]) {
                let tmp = a[j];
                a[j] = a[j+1];
                a[j+1] = tmp;
                numOfSwaps++;
            }
        }
    }
    
    console.log("Array is sorted in " + numOfSwaps + " swaps.");
    console.log("First Element: " + a[0]);
    console.log("Last Element: " + a[a.length-1]);
}