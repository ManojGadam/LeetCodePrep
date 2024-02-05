var deleteMiddle = function(head) {
    let curr = head,req = head,i=0
    while(curr!=null){
        if(i%2==0){
            req=req.next
        }
        curr = curr.next
        i++
    }
    console.log(req.val)
};

console.log(deleteMiddle([1,2,3,4]))