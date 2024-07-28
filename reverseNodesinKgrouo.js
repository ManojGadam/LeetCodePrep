var reverseKGroup = function(head, k) {
    if(k==1)return head
   let curr = head,len = 0,i=0,j=0,first=0
   while(curr){
    len++
    curr = curr.next
   }
   curr = head,head1 = curr,prev = null
   while(curr && i < len - len%k){
    i++
    j++
    if(j==k){
        if(i == len - len%k)break
        j=0
        if(prev){
            prev.next = head1
            prev = null
            }
        else prev = curr
        head1 = curr
        first++
        curr = curr.next
        }
    else if(j<k){
    let temp = curr.next
    curr.next = temp.next
    temp.next = head1
    head1 = temp
    if(first==0){
        head = temp
    }
    }
   }
   return head
 };

  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

 let arr = [1,2,3,4,5]
 let root = new ListNode(),curr = root
 for(let i of arr){
    curr.next = new ListNode(i)
    curr = curr.next
 }

 console.log(reverseKGroup(root.next,2))