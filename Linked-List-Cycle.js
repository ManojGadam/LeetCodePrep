/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head)return false
    let slow = head, fast = head, i = 0
    while(slow.next && fast.next && fast.next.next){
        slow = slow.next
        fast = fast.next.next
        if(slow == fast)return true
    }
    return false
};