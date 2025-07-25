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
    let carry = 0,curr=new ListNode(),ret = curr,sum = 0
    while(l1 && l2){
        sum = l1.val+l2.val+carry
        if(sum > 9) {
            carry = 1
            sum = sum%10
        }else carry = 0
        ret.next = new ListNode(sum)
        ret = ret.next
        l1 = l1.next
        l2 = l2.next
    }
    while(l1 && !l2){
        sum = l1.val+carry
        if(sum > 9) {
            carry = 1
            sum = sum%10
        }else carry = 0
        ret.next = new ListNode(sum)
        ret = ret.next
        l1 = l1.next
    }
    while(l2 && !l1){
        sum = l2.val+carry
        if(sum > 9) {
            carry = 1
            sum = sum%10
        }else carry = 0
        ret.next = new ListNode(sum)
        ret = ret.next
        l2 = l2.next
    }
    if(carry)ret.next = new ListNode(carry)
    return curr.next
};