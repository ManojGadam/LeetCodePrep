var sortList = function(head) {
    if(!head || !head.next)return head
    let left = head
    let right = getMid(head)
    let temp = right.next
    right.next = null
    right = temp

    left = sortList(left)
    right = sortList(right)
    return merge(left,right)
};

const getMid=(head) =>{
    let fast = head, slow = head,i=0
    while(fast){
        if(i>0 && i%2==0)slow = slow.next
        i++
        fast = fast.next
    }
    return slow
}

const merge=(left,right)=>{
    let res = null
    while(left && right){
        if(left.val<right.val){
            if(!res) {
                res = new ListNode(left.val)
                continue
            }
            res.next = new ListNode(left.val)
            left = left.next
        }
        else if(right.val<left.val){
            if(!res) {
                res = new ListNode(right.val)
                continue
            }
            res.next = new ListNode(right.val)
            right = right.next
        }
        else{
            if(!res) {
                res = new ListNode(left.val)
                continue
            }
            res.next = new ListNode(left.val)
            res = res.next
            res.next = new ListNode(right.val)
            left = left.next
            right = right.next
        }
        res = res.next
    }
    if(left){
        if(!res)res = left
        else res.next = left
    }
    else if(right){
        if(!res) res = right
        else res.next = right
    }
    return res
}


  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
  let arr = [4,2,1,3], head = null, tmp = null
  for (const i of arr) {
    if(!tmp){
        tmp = new ListNode(i)
        head = tmp
    }
    else{
    tmp.next = new ListNode(i) 
    tmp = tmp.next
    }   
  }

//
console.log(sortList(head))