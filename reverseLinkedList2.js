 function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

var reverseBetween = function(head, left, right) {
    if(left == right)return head
    let curr = head,i = 1,head1 = null,prev = null
    while(curr && curr.next){
        if(i==left-1)prev =  curr
        else if(i == left){
             head1 = curr
              let tmp = curr.next
            curr.next = tmp.next
            tmp.next = head1  
            head1 = tmp
            i++
            continue
            }
        else if(i > left && i<right){
            let tmp = curr.next
            curr.next = tmp.next
            tmp.next = head1
            head1 = tmp
            i++
            continue
        }
        if(i==right)break
        curr = curr.next
        i++
    }
    if(prev)prev.next = head1
    return prev
};

const arr = [1,2,3,4,5]
let head = new ListNode(),tail = head
for (const i of arr) {
    tail.next = new ListNode(i)
    tail = tail.next
}

console.log(reverseBetween(head.next,2,4))

