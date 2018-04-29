process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var N = parseInt(readLine());
    
    if(N % 2 == 0) {
        if(N >= 2 && N <= 5) {
            process.stdout.write("Not Weird");
        }
        if(N >= 6 && N <= 20) {
            process.stdout.write("Weird");
        }
        if(N > 20) {
            process.stdout.write("Not Weird");
        }
    }
    
    if(N % 2 != 0) {
        process.stdout.write("Weird");
    }
}