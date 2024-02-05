function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var pairSum = function(head) {
    let mid = head,curr=head,i=0,max = 0
    while(curr!=null){
        if(i%2==0 && i!=0){
            mid = mid.next
        }
        curr= curr.next
        i++
    }
    console.log(i)
    mid = mid.next
    mid = reverseList(mid)
    console.log(mid)
    curr = head
    for(let j=0;j<(i/2)+1;j++){
        let res = curr.val+mid.val
        if(res>max)max = res
        curr= curr.next
        mid = mid.next
    }
    return max
};

const reverseList = (head) =>{
if(!head || !head.next)return head
    let pres = head,first = head
    while(pres.next!=null){
        tmp = pres.next
        pres.next = pres.next.next
        tmp.next = first
        first = tmp
    }
    return first
}

let array = [5,4,2,1]
for (let i = 0; i < array.length; i++) {
     array[i] = new ListNode(array[i])
}
for (let i = 0; i < array.length-1; i++) {
    array[i].next = array[i+1]
}

console.log(pairSum(array[0]))