this.removeDuplicates=function(head){
    if(head == null)
        return null;
    
    var currentNode = head;
    
    while(currentNode.next != null) {
        var compareNode = currentNode;
        while(compareNode.next != null) {
            if(currentNode.data == compareNode.next.data) {
                let tmpNode = compareNode.next;
                delete compareNode.next;
                compareNode.next = tmpNode.next;
            }
            else {
                if(compareNode.next != null)
                    compareNode = compareNode.next;
            }
        }
        if(currentNode.next != null)
            currentNode = currentNode.next;
    }
    return head;
}