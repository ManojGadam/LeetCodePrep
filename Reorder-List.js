/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(!head.next)return head
    let fast = head,slow = head, i =0
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next 
    }
    function reverse(node){
        let end = null
        while(node){
            let tmp = node.next
            node.next = end
            end = node
            node = tmp
        }
        return end
    }
    let rev = reverse(slow)
    let curr = head
    while(curr.next != slow){
        curr = curr.next
    }
    curr.next = null
    //console.log(head)
    while(head && rev){
        let t1 = head.next,t2 =rev.next
        head.next = rev
        rev.next = t1
        if(t1!=null)head = t1
        else head = head.next
        rev = t2
        //console.log(rev,curr)
    }
    if(rev){
        head.next = rev
    }
};