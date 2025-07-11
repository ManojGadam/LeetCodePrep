/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const heap = new PriorityQueue((a,b)=>a.val-b.val)
    let ret = new ListNode(),curr = ret
    //if(!lists.length)return new ListNode()
    for(let list of lists){
        if(list)heap.enqueue(list)
    }
    while(heap.size()){
        let ele = heap.dequeue()
        curr.next = new ListNode(ele.val)
        curr = curr.next
        if(ele.next)heap.enqueue(ele.next)
    }
    return ret.next
};