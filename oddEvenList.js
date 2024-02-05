 function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }

var oddEvenList = function(head) {
    let curr= head,odd = head,even = head.next,end = head.next,i=1
    while(curr!=null){
        if(i%2!==0 && i>1){
             end.next =curr.next 
            curr.next = even
            odd.next = curr
            odd = curr
            curr = end
            console.log(end.val)
        }
        else if(i%2==0 && i>2){
            end = curr
        }
        curr = curr.next
        i++
    }
    return head
};


let array = [1,2,3,4]
for (let i = 0; i < array.length; i++) {
     array[i] = new ListNode(array[i])
}
for (let i = 0; i < array.length-1; i++) {
    array[i].next = array[i+1]
}
console.log(oddEvenList(array[0]))
