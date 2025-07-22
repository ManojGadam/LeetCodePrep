/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(!head.next)return null
    let curr = head,i = 0
    while(curr){
        curr = curr.next
        i++
    }
    curr=head
    let c = 0
    if(i-n == 0)return head.next
    while(c<i-n-1){
        curr = curr.next
        c++
    }
    let tmp = curr.next
    if(tmp){
    curr.next = tmp.next
    tmp.next = null
    }
    return head
};