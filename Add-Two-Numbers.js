/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let c1 = l1, c2 = l2,ret = new ListNode(),curr = ret,carry = 0
    while(c1 && c2){
        let sum = c1.val+c2.val+carry
        curr.next = new ListNode(sum%10)
        curr = curr.next
        carry = Math.floor(sum/10)
        c1 = c1.next
        c2 = c2.next
    }
    while(c1 && !c2){
        let sum = c1.val+carry
        curr.next = new ListNode(sum%10)
        curr = curr.next
        carry = Math.floor(sum/10)
        c1 = c1.next
    }
    while(c2 && !c1){
        let sum = c2.val+carry
        curr.next = new ListNode(sum%10)
        curr = curr.next
        carry = Math.floor(sum/10)
        c2 = c2.next
    }
    if(carry){
        curr.next = new ListNode(carry)
    }
    return ret.next
};