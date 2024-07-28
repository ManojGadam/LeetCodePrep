var removeElements = function(head, val) {
    let curr = head,prev= head,i = 0
    while(curr){
        if(curr.val == val){
            if(curr == head){
                head = head.next
                curr = head
                prev= curr
                continue
                }
            console.log(prev.val,curr.val)
            prev.next = curr.next 
            curr = curr.next
            continue   
        }
        if(i>0)prev = prev.next
        curr = curr.next
        i++
    }
    return head
};
 function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
let arr = [1,2,1]
let head = new ListNode(),tail = head
for (const i of arr) {
    tail.next = new ListNode(i)
    tail = tail.next
}
console.log(removeElements(head.next,1))