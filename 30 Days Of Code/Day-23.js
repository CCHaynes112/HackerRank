var queue = [root];

function func(n) {
    process.stdout.write(n.data + ' ');
    if(n.left != null)
        queue.push(n.left);
    if(n.right != null)
        queue.push(n.right);
}

for(var i = 0; i < queue.length; i++) {
    func(queue[i]);
}