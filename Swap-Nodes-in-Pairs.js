/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head || !head.next)return head
    let dummy = new ListNode()
    dummy.next = head
    let curr = dummy.next, prev = dummy
    while(curr && curr.next){
        let nxt = curr.next
        curr.next = nxt.next
        nxt.next = curr
        prev.next = nxt
        prev = curr
        curr = curr.next
    }
    return dummy.next
};