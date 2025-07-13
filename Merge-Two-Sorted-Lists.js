/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let c1 = list1,c2 =list2,curr = new ListNode(),ret = curr
    while(c1 && c2){
        let v1 = c1.val
        let v2 = c2.val
        if(v1 < v2){
            ret.next = new ListNode(v1)
            c1 = c1.next
        }else{
           ret.next = new ListNode(v2)
            c2 = c2.next 
        }
            ret = ret.next
    }
    while(c1){
         ret.next = new ListNode(c1.val)
         ret = ret.next
         c1 = c1.next
    }
    while(c2){
         ret.next = new ListNode(c2.val)
         ret = ret.next
         c2 = c2.next
    }
    return curr.next
};