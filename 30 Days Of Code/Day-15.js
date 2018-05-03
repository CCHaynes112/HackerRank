this.insert=function(head,data){
    var tmpNode = new Node(data);
    var current = head;
    
    if(!current) {
        head = tmpNode
        return head;
    }
    
    while(current.next) {
        current = current.next;
    }
    current.next = tmpNode;
    return head;
};