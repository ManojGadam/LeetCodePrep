var addTwoNumbers = function(l1, l2) {
    const findNumber=(l)=>{
         let num = []
         while(l!=null){
             num.push(l.val)
             l = l.next
         }
         return num
     }
     let n1 = findNumber(l1),n2 = findNumber(l2),head = new ListNode(0),sum = 0
     while(n1.length || n2.length){
         sum = 0
         if(n1.length)sum+=n1.pop()
         if(n2.length)sum+=n2.pop()
         sum += head.val
         head.val = sum%10
         let tmp = new ListNode(Math.floor(sum/10))
         tmp.next = head
         head = tmp
     }
     return (head.val === 0) ? head.next : head;
 };