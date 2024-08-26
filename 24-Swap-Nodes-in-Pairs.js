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
   let tail = head, node = head.next,prev = head
   while(node!=null){
    let tmp = tail
    tail.next = node.next
    node.next = tmp
    if(prev!==head){
        prev.next = node
        }
    else{
         head = node
         }
    prev = tail
    tail = tail.next
    if(tail)node = tail.next
    else node = null
   }
   return head
};
