function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var reverseList = function(head) {
    if(!head || !head.next)return head
    let curr = head,first = head
    while(curr!=null){
        let tmp = curr.next
        if(!tmp) {
            break
        }
        curr.next = tmp.next
        tmp.next = first
        first = tmp
    }
    return first
};

let array = [1,2,3,4,5]
for (let i = 0; i < array.length; i++) {
     array[i] = new ListNode(array[i])
}
for (let i = 0; i < array.length-1; i++) {
    array[i].next = array[i+1]
}
console.log(reverseList(array[0]))