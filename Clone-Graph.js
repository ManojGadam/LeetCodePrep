/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if(!node)return null
    let ret = new _Node(node.val)
    function rec(head,node,map){
        if(!node)return null
        if(head.val in map)return
        map[head.val] = head
        for(let neigh of node.neighbors){
            let newHead = map[neigh.val] || new _Node(neigh.val)
            head.neighbors.push(newHead)
            rec(newHead,neigh,map)
        }
    }
    rec(ret,node,{})
    //console.log(ret)
    return ret
};