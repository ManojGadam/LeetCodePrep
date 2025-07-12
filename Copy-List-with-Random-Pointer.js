/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    let curr = head
    const map = new Map()
    map.set(null,null)
    while(curr){
        let node = new _Node(curr.val)
        map.set(curr,node)
        curr = curr.next
    }
    curr = head
    while(curr){
        let copiedNode = map.get(curr)
        copiedNode.next = map.get(curr.next)
        copiedNode.random = map.get(curr.random)
        curr = curr.next
    }
    return map.get(head)
};