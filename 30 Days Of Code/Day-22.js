function getHeight(r) {
    if(r == null) {
        return 0;
    }
    
    else {
        var lHeight = getHeight(r.left);
        var rHeight = getHeight(r.right);
        
        if(lHeight > rHeight)
            return lHeight + 1;
        else
            return rHeight + 1;
    }
}
if(getHeight(root) == 0)
    return 0;
return getHeight(root)-1;