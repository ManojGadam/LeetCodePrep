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
    let dummy = new ListNode()
    dummy.next = head
    let slow = dummy,fast = dummy,i=1
    for(let i=0;i<=n;i++){
        fast = fast.next
    }
    while(fast){
        slow = slow.next
        fast = fast.next
    }
    let tmp = slow.next
    slow.next = tmp.next
    tmp.next = null
    return dummy.next
};