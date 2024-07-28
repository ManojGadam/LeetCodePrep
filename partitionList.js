var partition = function(head, x) {
    if(!head || !head.next)return head
    let tail = head, tmp = head,i = 0
    while(tail.next){
        i++
        tail = tail.next
    }
    while(i>0){
        i--
        if(tmp.next && tmp.next.val >= x){
            let node = tmp.next
            tmp.next = tmp.next.next
            tail.next = node
            node.next = null
            tail = tail.next
            continue
        }
        tmp = tmp.next
    }
    console.log(tmp.val)
    if(head.val>=x){
        let node = head, node2 = tmp.next
        tmp.next = node
        head= head.next
        node.next = node2
    }
    return head
};
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

let arr = [1,1]
let head = new ListNode(),tail = head
for (const i of arr) {
    tail.next = new ListNode(i)
    tail = tail.next
}
console.log(partition(head.next,0))