/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if(!head || !head.next)return head
    let dummy = new ListNode(-500)
    dummy.next = head
    let curr = dummy, part = new ListNode(),prev = dummy,parCurr = part
    let last = null
    while(curr){
        if(curr.val >= x){
            prev.next = curr.next
            parCurr.next = curr
            parCurr = parCurr.next
            curr.next = null
            curr = prev
        }
       // console.log(part)
        prev = curr
        curr = curr.next
    }
    if(prev && part)prev.next = part.next
    return dummy.next
};