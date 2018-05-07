function Solution(){
    
    this.stack = [];
    this.queue = [];
    
    this.pushCharacter = function(ch) {
        this.stack.push(ch);
    }
    
    this.enqueueCharacter = function(ch) {
        this.queue.push(ch);
    }
    
    this.dequeueCharacter = function() {
        return this.queue.shift();
    }
    
    this.popCharacter = function() {
        return this.stack.pop();
    }
}