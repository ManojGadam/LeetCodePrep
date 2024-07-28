var reverseKGroup = function(head, k) {
    let curr= head,i=0,first = head,nodes=0
    if(!head.next)return head
    const reverseList = (curr,first) =>{
        let tmp = curr.next
        curr.next = tmp.next
        tmp.next = first
        first = tmp
        return first
    }
    while(curr){
        nodes+=1
        curr=curr.next
    }
    curr = head
    let rem = nodes%k,nodeCounter=0
    while(curr.next && k>1){
        if(nodeCounter == 1)head = first
        if(i==k-1){
            i=0
            nodeCounter+=1
            first = curr
            curr= curr.next
        }
        if(nodeCounter == nodes-rem)break
        first = reverseList(curr,first)
        console.log(first,i,nodeCounter)
        nodeCounter+=1
        i++
    }

    return head
};
class ListNode {
        constructor(val, next){
            this.val = (val===undefined ? 0 : val)
            this.next = (next===undefined ? null : next)
        }
}
let nodes = [1,2,3,4,5]
let head = new ListNode(nodes[0])
let node = head
for(let i=1;i<nodes.length;i++){
    node.next = new ListNode(nodes[i])
    node = node.next
}

console.log(reverseKGroup(head,2))