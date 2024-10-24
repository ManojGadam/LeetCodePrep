/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let f = head,s = head, i =1
    while(f!=null){
        if(i%2==0)s =s.next
        f = f.next
        i++
    }
    let curr =s.next,prev = s
    while(curr!=null){
        let tmp = curr.next
        curr.next = s
        prev.next = tmp
        s = curr
        curr = tmp
        //prev = prev.next
    }
    while(s!=null){
        if(s.val!==head.val)return false
        s = s.next
        head = head.next
    }
    return true
};