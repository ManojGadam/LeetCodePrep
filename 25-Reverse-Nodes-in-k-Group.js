/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(k==1 || !head.next)return head
    let h1 = head,node = h1.next,i = 2,prev = null,val = null,n = 0
    while(h1){
        n++ 
        h1 = h1.next
    }
    h1 = head
    while(node){
     if(i%k==0){
         let tmp = node.next
         node.next = null
         val = h1
         h1 = addToHead(h1)
         if(!prev){
             head = h1
             prev = val
         }else{
             prev.next = h1
             prev= val
         }
         h1  = tmp
         if(h1) node = h1.next
         else node = h1
         i+=2
         continue
     }
     if(i==n-(n%k))break   
     node = node.next
     i++
    }
    if(k!=n && prev)prev.next = h1
    return head
 }
 
 function addToHead(head){
     if(!head || !head.next)return head
     let node = head.next
     head.next = null
     while(node!=null){
         let tmp = node.next
         node.next = head
         head = node
         node = tmp
     }
     return head
 }

